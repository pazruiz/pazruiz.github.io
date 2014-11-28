/*
	Tarea tema 3. Listado básico
	
	15. Implementa CalculaMedia que pida números hasta que se
	introduzca uno negativo. Entonces, que muestre la media.

	@author Paz Ruiz García
	@since 27/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Calcula Media</h1>"
				+ "<p>Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. Entonces, que muestre la media.</p>"
			  );

document.write("<form name='form' action='javascript:agregarNumerosLista(getNumero())'>"
				+ "Introduzca números positivos."
				+ "<div class='label'>"
				+ "<label for='numero'>Número</label>"
				+ "<input type='number' id='numero' name='numero' min=0 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<input type='submit' id='anadir' value='Añadir número'> "
				+ "<input type='button' name='terminar' id='terminar' value='Terminar' onclick='finalizar()'> "
				+ "<input type='button' name='calcular' id='calcular' value='Calcular Media' onclick='calcularMedia()'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='info'></div>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

// Array de numeros insertados
var numeros = new Array();

//Función para obtener el número:
function getNumero(){
	return parseFloat(document.getElementById("numero").value.trim());
}

// Función para obtener la lista de todos los números agregados
function agregarNumerosLista(numero,numeros){
	var infoNum = "";
	numeros = this.numeros;
	
	//Si los números son positivos los metemos en un array
	if (numero > 0){
		numeros.push(numero);
		//Los pasamos a cadena para mostrarlos por pantalla
		infoNum = numeros.toString();
	}
	else {
		infoNum = "No ha introducido ningún número."
	}
	document.getElementById("info").innerHTML = "<p>Números introducidos: " + numeros;
	
}

//Función para calcular y mostrar la media
function calcularMedia(numeros){
	numeros = this.numeros
	var media = 0;
	var suma = 0;
	
	//Sumamos el total de numeros que hay en el array
	for (var i = 0; i < numeros.length; i++){
		suma += numeros[i];
	}

	//Calculamos la media
	media = suma/numeros.length;

	document.getElementById("resultado").innerHTML = "<p>La media de los números introducidos es: <b>" + media +  "</b></p>";

}
//Función que desabilitará los botones cuando pulsemos terminar
function finalizar() {
	
	document.form.anadir.disabled = true;
	document.form.numero.disabled = true;

}