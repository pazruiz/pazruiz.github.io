/*
	4.	Crea la página sumaMatrices.html que sume dos matrices de enteros.
		El usuario introducirá por teclado las dimensiones de las matrices (m x n).
		Las matrices se inicializarán de forma aleatoria con enteros entre 0 y 10.
		Se visualizarán sumandos y suma.

	@author Paz Ruiz García
	@since 12/11/2014
*/

// Genera un número aleatorio entre 0 y 10
function generarAleatorio(){
	return Math.floor((Math.random() * 10) + 1);
}


function mostrarResultado() {
	// Obtencion de filas y columnas
	var filas = parseInt(document.getElementById("filas").value);
	var columnas = parseInt(document.getElementById("columnas").value);
	// Declaración de sumandos
	var Sumando1 = new Array(filas);
	var Sumando2 = new Array(filas);
	var suma = new Array(filas);
	// Variables para mostrar al usuario
	var cadenaSumando1 = "<pre>";
	var cadenaSumando2 = "<pre>";
	var cadenaSuma = "<pre>";

	// Inicializacion de matrices
	for (var i = 0; i < filas; i++) {
		Sumando1[i] = new Array(columnas);
		Sumando2[i] = new Array(columnas);
		suma[i] = new Array(columnas);

		for (var j = 0; j < columnas; j++) {
			Sumando1[i][j] = generarAleatorio();
			Sumando2[i][j] = generarAleatorio();

			// Se suman las matrices
			suma[i][j] = Sumando1[i][j]+Sumando2[i][j];

			// Se va almacenando, para ser mostradas
			cadenaSumando1 += Sumando1[i][j] + "	";
			cadenaSumando2 += Sumando2[i][j] + "	";
			cadenaSuma += suma[i][j] + "	";
		};
		// Linea nueva en cada cadena
		cadenaSumando1 += '<br>';
		cadenaSumando2 += '<br>';
		cadenaSuma += '<br>';
	};

	// Fin de texto preformateado
	cadenaSumando1 += '</pre>';
	cadenaSumando2 += '</pre>';
	cadenaSuma += '</pre>';

	// Mostramos al usuario
	document.getElementById("resultado").innerHTML = '<h2>Matriz 1</h2>'
	+ cadenaSumando1
	+ '<h2>Matriz 2</h2>'
	+ cadenaSumando2 
	+ '<h2>Suma</h2>'
	+ cadenaSuma;
}