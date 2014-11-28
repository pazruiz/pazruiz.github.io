/** 
	Tarea tema 3.
	Realizar una aplicación en JavaScript que realice lo siguiente:
	1.	Abra una nueva ventana.
		o	Hacer una función y dentro de esa función:
				Escribir en la nueva ventana <h1>Ventana Nueva</h1>
				URL Completa: XXXXX
				Protocolo utilizado: XXXXX
				Nombre en código del navegador: XXXXX
				Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
				Java SI disponible en esta ventana, o bien.
				Java NO disponible en esta ventana.
				Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
	2.	Y ahora fuera del código de la función que siga haciendo lo siguiente:
		o	Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
		o	Que solicite: introduzca su nombre y apellidos.
		o	Que solicite: introduzca DIA de nacimiento.
		o	Que solicite: introduzca MES de nacimiento.
		o	Que solicite: introduzca AÑO de nacimiento.
		o	Una vez solicitados esos datos imprimirá en la ventana principal:
				Buenos dias XXXXX
				Tu nombre tiene XX caracteres, incluidos espacios.
				La primera letra E de tu nombre está en la posición: X
				La última letra E de tu nombre está en la posición: X
				Tu nombre menos las 3 primeras letras es: XXXXXXXX
				Tu nombre todo en mayúsculas es: XXXXXXXX
				Tu edad es: XX años.
				Naciste un feliz XXXXXX del año XXXX.
				El coseno de 90 es: XXXXXXXXXX
				El número mayor de (65, 22, 69, 99, 12) es: XX
				Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
	3.	Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda.
	4.	Criterios de puntuación. 
		1.	Cumplimiento de los requisitos anteriores
		2.	Usabilidad
		3.	Estética (sin librerías)
		4.	Presentación del código (comentarios, identación...)

	@author Paz Ruiz García
	@since 20/10/2014
*/

var ventana1= document.open(abrirVentana());
var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth() + 1;
var annoActual = fechaActual.getFullYear();


/*Función que abrirá una nueva ventana con la información solicitada en
  el punto 1 del ejercicio*/
function abrirVentana() {
	//Creamos una nueva ventana
	var ventana = window.open("", "Información de la página", "width=500,height=300");
	//ventana.document.open();
	ventana.document.write("<!DOCTYPE html>"
							+ "<html lang='es'>"
							+ "<head>"
							+ "<metacharset='UTF-8/>"
							+ "<title>Información de la página</title>"
							+ "</head>"
							+ "<body>");
	//Cuerpo del documento
	ventana.document.write("<h1>Información de la página</h1>");
	ventana.document.write("<p>La URL completa: <b>" + document.URL + "</b></p>");
	ventana.document.write("<p>El protocolo utilizado es: <b>" + location.protocol + "</b></p>");
	ventana.document.write("<p>El nombre del navegador es: <b>" + navigator.appCodeName + "</b></p>");
	
	//Verificamos si Java está disponible en el navegador
	if(navigator.javaEnabled() == true){
		ventana.document.write("<p><b>Java SI disponible en esta ventana.</b></p>");
	}
	else {
		ventana.document.write("<p><b>Java NO disponible en esta ventana.</b></p>");	
	}
	ventana.document.write("Se ha abierto la web del I.E.S. Gran Capitán en una ventana nueva.");
	ventana.document.write("<body>"
							+ "</html>");
	ventana.document.close();

	//Ventana que se abre en la web del IES Gran Capitán
	window.open("http://www.iesgrancapitan.org/portal/", "IES Gran Capitán", "width=800,height=600");
};

//Contenido de la ventana principal
document.write("<div id=\"contenedor\">"
				+ "<div id=\"principal\">"
				+ "<h1>Tarea del Tema 3</h1>");

//Creamos un formulario
document.write("<section id=\"pagina\">"
				+ "<form name=\"formulario\">"
				+ "<fieldset>"
        		+ "<legend>Datos personales</legend>"
				+ "Introduzca su nombre y apellidos <br/>"
				+ "<input type=\"text\" id=\"nombre\" name=\"nombre\" size=\"60\" maxlength=\"80\" placeholder=\"Nombre y apellidos\" required autofocus /><br/>"
				+ "Introduzca DIA de nacimiento<br/>"
				+ "<input type=\"number\" id=\"dia\" name=\"dia\" size=\"5\" min=\"1\" max=\"31\" placeholder=\"Día\" required />"
				+ "<br/>"
				+ "Introduzca MES de nacimiento<br/>"
				+ "<select name=\"mes\" id=\"mes\"><option value=\"1\">Enero</option><option value=\"2\">Febrero</option><option value=\"3\">Marzo</option><option value=\"4\">Abril</option><option value=\"5\">Mayo</option><option value=\"6\">Junio</option><option value=\"7\">Julio</option><option value=\"8\">Agosto</option><option value=\"9\">Septiembre</option><option value=\"10\">Octubre</option><option value=\"11\">Noviembre</option><option value=\"12\">Diciembre</option></select><br />"
				+ "<br/>"
				+ "Introduzca AÑO de nacimiento<br/>"
				+ "<input type=\"number\" id=\"anno\" name=\"anno\" min=\"1900\" placeholder=\"Año\" required />"
				+ "<br/><br/>"
				+ "<input type=\"submit\" onclick=\"mostrarInformacion()\" value=\"Enviar\">"
  				+ "</fieldset>"
				+ "</form><br/>"	
				+ "</section>"
				+ "</div>"
				+ "</div>"
				+ "<div id=\"resultado\"></div>"
				);


//Función que obtendrá el nombre del formulario
function getNombre(){
	return document.getElementById("nombre").value.trim();
	
	
}

//Función para obtener el día del formulario
function getDia(){
	return document.getElementById("dia").value.trim();
}

//Función para obteber el mes del formulario
function getMes(){
	return document.getElementById("mes").value;
}
function getAnno(){
	return document.getElementById("anno").value.trim();
}
function mostrarInformacion() {
var nombre = getNombre();
var dia = getDia();
var mes = getMes()-1;
var anno = getAnno();
var resultado = document.getElementById("resultado"); 	
resultado = document.write(
						+ "<p>Buenos días " + nombre + "</p>"
						+ "<p>Tu nombre tiene " +  nombre.length + " caracteres.</p>"
						+ "<p>La primera E de tu nombre está en la posición: " + ((nombre.toUpperCase()).indexOf("E")+1) + "</p>"
						+ "<p>Tu nombre menos las 3 primeras letras es: " + nombre.substring(3) + "</p>"
						+ "<p>Tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + "</p>"
						+ "<p>Tu edad es: " + calcularEdad(dia, mes, anno) + "años</p>"
						+ "<p>Naciste un feliz " + dia + " del año " + anno + "</p>"
						+ "<p>El coseno de 90 es: " + Math.round(Math.cos((Math.PI)/2)) + "</p>"
						+ "<p>El número mayor de (65, 22, 69, 99, 12) es: " + Math.max(65,22,69,99,12) + "</p>"
						+ "<p>Ejemplo de número al azar entre 1 y 10: " + Math.ceil(Math.random() * 10) + "<p>"
						);

}

// Función para calcular la edad según la fecha recibida
function calcularEdad(diaNacimiento,mesNacimiento,annoNacimiento){
	// Valor aproximado para la edad
	var edad = annoActual - annoNacimiento;

	if (mesActual < mesNacimiento){	// Si el mes recibido es menor que el mes actual
		edad--;
	};
	if (mesNacimiento == mesActual){
		if (diaActual < diaNacimiento){	// Si el día recibido es menor que el día actual
			edad--;
		}; 
	};

	// Devolvemos el cálculo de la edad
	return edad;
};