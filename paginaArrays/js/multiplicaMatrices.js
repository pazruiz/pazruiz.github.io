/*
	5.	Crea la página multiplicaMatrices.html que multiplique dos matrices
		de enteros. El usuario elegirá las dimensiones de las matrices (m x n, n x o).
		Las matrices se inicializarán de forma aleatoria con enteros entre 1 y 10.
		Se visualizarán factores y resultado.

	@author Paz Ruiz García
	@since 12/11/2014
*/

// Genera un número aleatorio entre 0 y 10
function generarAleatorio(){
	return Math.floor((Math.random() * 10) + 1);
}


function mostrarResultado() {
	// Obtencion de filas y columnas
	var filas1 = parseInt(document.getElementById("filas1").value);
	var cols1fils2 = parseInt(document.getElementById("cols1fils2").value);
	var columnas2 = parseInt(document.getElementById("columnas2").value);
	// Matrices
	var matriz1 = new Array(filas1);
	var matriz2 = new Array(cols1fils2);
	var multiplicacion = new Array(filas1);
	// Variables para mostrar al usuario
	var cadenaMatriz1 = "<pre>";
	var cadenaMatriz2 = "<pre>";
	var cadenaMultiplicacion = "<pre>";

	// Inicializacion de la primera matriz
	for (var f = 0; f < filas1; f++) {
		matriz1[f] = new Array(cols1fils2);
		multiplicacion[f] = new Array(columnas2);

		for (var c = 0; c < cols1fils2; c++) {
			matriz1[f][c] = generarAleatorio();

			// Se va almacenando, para ser mostradas
			cadenaMatriz1 += matriz1[f][c] + "	";
		};

		cadenaMatriz1 += '<br>';
	};

	// Inicializacion de la segunda matriz
	for (var f = 0; f < cols1fils2; f++) {
		matriz2[f] = new Array(columnas2);

		for (var c = 0; c < columnas2; c++) {
			matriz2[f][c] = generarAleatorio();

			// Se va almacenando, para ser mostradas
			cadenaMatriz2 += matriz2[f][c] + "	";
		};

		cadenaMatriz2 += '<br>';
	};

	// Multiplicacion de matrices
	for (var f = 0; f < filas1; f++) {
		for (var c = 0; c < columnas2; c++) {
			multiplicacion[f][c] = 0;
			for (var i = 0; i < cols1fils2; i++) {
				multiplicacion[f][c] = multiplicacion[f][c] + (matriz1[f][i] * matriz2[i][c]);
			};
			// Almacenado para mostrar al usuario
			cadenaMultiplicacion += multiplicacion[f][c] + "	";
		};
		// Linea nueva en la cadena
		cadenaMultiplicacion += '<br>';
	};

	// Fin de texto preformateado
	cadenaMatriz1 += '</pre>';
	cadenaMatriz2 += '</pre>';
	cadenaMultiplicacion += '</pre>';

	// Mostramos al usuario
	document.getElementById("resultado").innerHTML = '<h2>Matriz 1</h2>'
	+ cadenaMatriz1
	+ '<h2>Matriz 2</h2>'
	+ cadenaMatriz2 
	+ '<h2>Multiplicación</h2>'
	+ cadenaMultiplicacion;
}