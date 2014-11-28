/*
	Tarea tema 3. Listado básico
	
	13. Implementa CerosYUnos que lea una secuencia de ceros y unos.
	    Mostrará el número de ceros de la secuencia. Dejará de leer
	    cuando el usuario introduzca el número 2.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Ceros y unos</h1>"
				+ "<p>13. Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.</p>"
			  );

document.write("<form name='form' action='javascript:agregarCerosLista(getNumero())'>"
				+ "Introduzca un número positivo."
				+ "<div class='label'>"
				+ "<label for='numero'>Número</label>"
				+ "<input type='number' id='numero' name='numero' min=0 max=1 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<input type='submit' id='anadir' value='Añadir número'> "
				+ "<input type='button' name='terminar' id='terminar' value='Terminar' onclick='finalizar()'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );
var num = 0;
//Array de números insertados
var ceros = new Array();

//Función para obtener el número:
function getNumero(){
	return parseFloat(document.getElementById("numero").value.trim());
};
// Función para obtener la lista de todos los números agregados
function agregarCerosLista(numero,ceros){
	
	ceros = this.ceros;
	
	//Si es un cero lo insertamos en el array
	if (numero == 0){
		ceros.push(numero);
	}

	document.getElementById("resultado").innerHTML = ceros.length;
	
}

//Función que desabilitará los botones cuando pulsemos terminar
function finalizar() {
	
	document.form.anadir.disabled = true;
	document.form.numero.disabled = true;

}