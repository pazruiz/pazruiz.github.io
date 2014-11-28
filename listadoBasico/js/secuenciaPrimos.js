/*
	Tarea tema 3. Listado básico
	
	5. Implenta NumerosPrimosEnSecuencia que pida un número e indique
	cuántos números primos existen entre el 1 y dicho número.

	@author Paz Ruiz García
	@since 23/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Números primos en secuencia</h1>"
				+ "<p>5. Implenta NumerosPrimosEnSecuencia que pida un número e indique	cuántos números primos existen entre el 1 y dicho número.</p>"
			  );

document.write("<form name='form' action='javascript:mostrarSecuenciaPrimos(document.forms.form)'>"
				+ "<div class='label'>"
				+ "<label for='number'>Introduzca un número</label>"
				+ "<input type='number' id='numero' min=1 required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<p>La secuencia de números hasta el número introducido es: </p>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

var primos = 0;

function mostrarSecuenciaPrimos() {
	var num = document.getElementById("numero").value.trim(); 
	
	for(var i = 2; i < num; i++){
		if(esPrimo(i)){
			primos++;
		}
	}
	
	if(primos > 0){
		document.getElementById("resultado").innerHTML = "Entre el 1 y el " + num + " hay " + primos + " números primos.";
	}
	else if (num == 1){
		document.getElementById("resultado").innerHTML = "El número 1, por convenio, no se considera número primo.";
	}
	else {
		document.getElementById("resultado").innerHTML = "No hay ningún número primo entre 1 y " + num;
	}
}
function esPrimo(n) {
	var primo = true;
	
	for(var i = 2; i<= (n/2); i++)
		if(n%i == 0){
			primo = false;
		}
	return primo;
}