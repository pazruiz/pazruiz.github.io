/*
	Tarea tema 3. Listado básico
	
	12. Implementa MediaPositivos que calcule la media de una serie
	    de números positivos, introducidos por teclado. Dejará de
	    leer cuando el usuario introduzca el 0.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Media Positivos</h1>"
				+ "<p>12. Implementa MediaPositivos que calcule la media de una serie de números positivos, introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.</p>"
			  );

document.write("<form name='form' action='javascript:agregarNumeroLista(getNumero())'>"
				+ "Introduzca un número positivo."
				+ "<div class='label'>"
				+ "<label for='numero'>Número</label>"
				+ "<input type='number' id='numero' name='numero' min=0 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<input type='submit' value='Añadir número'> "
				+ "<input type='button' name='calcular' id='calcular' value='Calcular Media' onclick='calcularMedia()'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

//Array de números insertados
var numeros = new Array();

//Función para obtener el número:
function getNumero(){
	return parseFloat(document.getElementById("numero").value.trim());
};
// Función para obtener la lista de todos los números agregados
function agregarNumeroLista(numero,numeros){
	numeros = this.numeros;

	//Insertamos el numero recibido en el array
	numeros.push(numero);
}

//Función para calcular y mostrar la media
function calcularMedia(numeros){
	numeros = this.numeros;

	var media = 0;
	var contador = 0;
	for (var i = 0; i < numeros.length; i++) {
		contador += numeros[i];
	};

	//Calculamos la media
	media = contador/numeros.length;
	
	document.getElementById("resultado").innerHTML = media;

}