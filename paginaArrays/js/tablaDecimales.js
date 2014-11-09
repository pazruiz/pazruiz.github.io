/*
	2.	Crea la página tablaDecimales.html que cree una matriz de
		decimales. Pide las dimensiones (filas y columnas). Se
		inicializa con valores aleatorios entre 1 y 100. Visualiza
		el array, localiza los valores máximo y mínimo y muestra
		tanto estos valores como la posición que ocupan en la matriz.

	@author Paz Ruiz García
	@since 9/11/2014
*/

//Devuelve un número aleatorio entre 0 y 100
function generarAleatorio(){
	return parseFloat(Math.random() * 100).toFixed(2);
}

function mostrarMatriz() {
	var maximo = 0;
	var filMax = 0;
	var colMax = 0;
	var minimo = 100;
	var filMin = 0;
	var colMin = 0;

	//Variables para crear la matriz
	var filas = parseInt(document.getElementById("filas").value);
	var columnas = parseInt(document.getElementById("columnas").value);
	//Declaramos la matriz
	var matriz = new Array(filas);
	var resultado = "<pre>";

	//Generamos la matriz
	for (var i = 0; i < filas; i++) {
		matriz[i] = new Array(columnas);

		for (var j = 0; j < columnas; j++) {
			matriz[i][j] = generarAleatorio();
			resultado += matriz[i][j] + "	";

			//Buscamos el máximo
			if (matriz[i][j] >= maximo) {
				maximo = matriz[i][j];
				filMax = i;
				colMax = j;
			};
		};
		resultado += "<br/>";
 	};
 	resultado += "</pre>";

 	//Buscamos el mínimo
 	for (var i = 0; i < filas; i++) {
 		for (var j = 0; j < columnas; j++) {
 			if (matriz[i][j] <= minimo) {
 				minimo = matriz[i][j];
 				filMin = i;
 				colMin = j;
 			};
 		};
 	};

	//Lo Mostramos por pantalla
	document.getElementById("resultado").innerHTML = "<h2>Matriz</h2>"
	 + "<p>" + resultado + "</p>"
	 + "<h2>Máximo</h2>"
	 + "<p>" + maximo + ", situado en la posición [" + filMax +"][" + colMax + "].</p>"
	 + "<h2>Mínimo</h2>"
	 + "<p>" + minimo + ", situado en la posición [" + filMin +"][" + colMin + "].</p>";
	
};
