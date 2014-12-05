/*
	Lindo gatito

	Crea una clase Gato, y a partir de ella crea tantos gatos como quiera
	el usuario.
	Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un 
	peso. Cada vez que crees un objeto gato aparecerá una ventana nueva
	con una imagen que cambiará en función de su estado (comiendo,
	durmiendo y jugando, que es su estado habitual). El usuario podrá
	averiguar la edad del gato partiendo de un evento.

	- Evita las cajas de texto
	- No puedes usar ni alert ni prompt
	- Hazlo lo más dinámico posible.
	- Utiliza prototype para los métodos

	@author Paz Ruiz García
	@since 19/11/2014

*/

// Contructor del gato
function Gato(nombre, anyo, mes, dia, raza, peso) {
	this.nombre = nombre;
	this.anyo = anyo;
	this.mes = mes;
	this.dia = dia;
	this.raza = raza;
	this.peso = peso;
}

Gato.prototype.jugar = function() {
	if(this.peso < 1) {
		this.morir();
	}
	else {
		this.peso -= 1;
		recargarContenido();
		if(!this.engordar()) {
			ventanaGato.document.getElementById("imagen").innerHTML = "<img src='./img/jugar.gif'></img";	
		}
		else {
			ventanaGato.document.getElementById("imagen").innerHTML = "<img src='./img/cansado.gif'></img>";
		}
	}
}
Gato.prototype.comer = function() {
	if(this.peso > 20) {
		this.morir();
	}
	else {
		this.peso += 1;
		recargarContenido();
		if(this.engordar()) {
			ventanaGato.document.getElementById("imagen").innerHTML = "<img src='./img/comer.gif></img>";
		}
		else {
			ventanaGato.document.getElementById("imagen").innerHTML = "<img src='./img/comer2.gif></img>";
		}
	}
}

Gato.prototype.engordar = function(){
	if(this.peso > 12){
		return true;
	}
	return false;
}

Gato.prototype.dormir = function(){
	recargarContenido();
	if(!this.engordar()){
		ventanaGato.document.getElementById('imagen').innerHTML = "<img src='./img/dormir.gif'></img>";
	}
	else{
		ventanaGato.document.getElementById('imagen').innerHTML = "<img src='./img/dormir2.gif'></img>";
	}
}

Gato.prototype.verEdad = function(){
	ventanaGato.document.getElementById('datosGato').innerHTML += "Edad: " + calcularEdad(this.dia, this.mes, this.anyo) + "<br/>";
}

Gato.prototype.morir = function(){
	ventanaGato.document.getElementById('imagen').innerHTML = "<img src='./img/cielo.gif'></img>";
	ventanaGato.document.getElementById('jugar').disabled = true;
	ventanaGato.document.getElementById('comer').disabled = true;
	ventanaGato.document.getElementById('dormir').disabled = true;
	ventanaGato.document.getElementById('edad').disabled = true;
}

function crearGato(){
	var nombre = document.getElementById('nombre').value;
	var anyo = document.getElementById('anyo').value;
	var mes = document.getElementById('meses').value;
	var dia = document.getElementById('dia').value;
	var raza = document.getElementById('raza').value;
	var peso = document.getElementById('peso').value;
	
	if(nombre == ''){
		document.getElementById('control').innerHTML = "Debe darle un nombre a su gato<br/>";
	}
	else if(comprobarFecha(dia, mes, anyo) == 'Fecha inválida'){
		document.getElementById('control').innerHTML = comprobarFecha(dia, mes, anyo) + "<br/>";	
	}
	else if(raza == ''){
		document.getElementById('control').innerHTML = "¿De qué raza es su gatito?<br/>";
	}
	else if(parseInt(peso) != peso || peso < 1 || peso > 14){
		document.getElementById('control').innerHTML = "Peso incorrecto";
	}
	else{
		document.getElementById('control').innerHTML = "";
		
		gato = new Gato(nombre, anyo, mes, dia, raza, peso);
		
		ventanaGato = window.open("","", "width=320,height=400");
		ventanaGato.window.open();
		ventanaGato.document.write("<html>" +
								   "<head>" +
								   "<title>Lindo Gatito</title>" +
								   "<meta charset='utf-8'>" +
								   "</head>" +
								   "<body>" +
								   "<div id='content'>" +
								   "<section>" +
								   "<article id='caja'>" +								   
								   "<div id='imagen'></div>" +
								   "<div id='datosGato'></div>" +
								   "<input type='button' id='jugar' value='Jugar' onClick='opener.gato.jugar()'>" +
								   "<input type='button' id='comer' value='Comer' onClick='opener.gato.comer()'>" +
								   "<input type='button' id='dormir' value='Dormir' onClick='opener.gato.dormir()'>" +
								   "<input type='button' id='edad' value='Edad' onClick='opener.gato.verEdad()'>" +
								   "</article>" +
								   "</section>" +
								   "</div>" +	
								   "</body>" +
								   "</html>");
		
		recargarContenido();
	}				   
}

function recargarContenido(){
	ventanaGato.document.getElementById('imagen').innerHTML = "<img src='./img/gatoAmasar.gif'></img>";
	ventanaGato.document.getElementById('datosGato').innerHTML = "Nombre: " + gato.nombre + "<br/>";
	ventanaGato.document.getElementById('datosGato').innerHTML += "Fecha de nacimiento: " + comprobarFecha(gato.dia, gato.mes, gato.anyo) + "<br/>";
	ventanaGato.document.getElementById('datosGato').innerHTML += "Raza: " + gato.raza + "<br/>";
	ventanaGato.document.getElementById('datosGato').innerHTML += "Peso: " + gato.peso + "Kg" + "<br/>";
}

function nombreMeses(mes){
	switch(mes){
		case 0:
			return "Enero";
		case 1:	
			return "Febrero";
		case 2:
			return "Marzo";
		case 3:	
			return "Abril";
		case 4:
			return "Mayo";
		case 5:	
			return "Junio";
		case 6:
			return "Julio";
		case 7:	
			return "Agosto";
		case 8:
			return "Septiembre";
		case 9:	
			return "Octubre";
		case 10:
			return "Noviembre";
		case 11:
			return "Diciembre";	
			
	}
}
	
/**
 * Comprueba que la fecha es válida
 */ 
function comprobarFecha(dia, mes, anyo){
	fecha = new Date;
	fechaNacim = new Date;
	
	if(dia >= 0 && dia < 32 && dia != '' && mes >= 0 && mes < 13 && mes != '' && anyo < fecha.getFullYear() && anyo != ''){
		fechaNacim.setDate(dia);
		fechaNacim.setMonth(mes-1);
		fechaNacim.setFullYear(anyo);
		return fechaNacim.getDate() + " de " + nombreMeses(fechaNacim.getMonth()) + " de " + fechaNacim.getFullYear();
	}
	
	return "Fecha inválida";
}
	
/**
 * Calcula la edad en función del día, mes y año de nacimiento
 */ 
function calcularEdad(diaNacim,mesNacim,anyoNacim){
	
	if(comprobarFecha(diaNacim,mesNacim,anyoNacim) == "Fecha inválida"){
		return "Fecha inválida";
	}
		
	var fechaActual = new Date();
	var anyoActual = fechaActual.getFullYear();
	var mesActual = fechaActual.getMonth();
	var diaActual = fechaActual.getDate();
	
	var edad = anyoActual - anyoNacim;
	
	if (mesActual < (mesNacim - 1)){
	  edad--;
	}
	if (((mesNacim - 1) == mesActual) && (diaActual < diaNacim)){ 
	  edad--;
	}
	
	return edad;
}	
