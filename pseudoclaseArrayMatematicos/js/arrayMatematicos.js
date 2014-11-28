/*
	Mediante prototype, agrega los métodos sumar, restar, trasponer y
	multiplicar a la clase ArraysMatematicos. Recuerda que el estado
	de un array deberían de ser los elementos.

	Recuerda las restricciones y posibilidades de un Array:

	1. Sobre las dimensines de los arrays implicados (unidimensional,
	bidimensional...)
	2. Sobre las longitudes de los arrays implicados (1 en adelante)
	3. Sobre los contenidos de los arrays implicados (numéricos)
	4. Podemos rellenar un Array con valores aleatorios o directamente
	desde teclado.
	
	Una vez creada la clase, demuestra su funcionamiento en una página
	bien diseñada.
	Evita las cajas de texto y hazla lo más dinámica posible.

	@author Paz Ruiz García
	@since 20/11/2014
*/

// Genera un número aleatorio entre 0 y 10
function generarAleatorio() {
	return Math.floor((Math.random() * 10) + 1);
};

function ArrayMatematicos(fila, columna) {
	this.fila = fila;
	this.columna = columna;
	this.matriz = this.generarMatriz();

}

ArrayMatematicos.prototype.generarMatriz = function() {
	var matriz = [];
	for (var i = 0; i < this.fila; i++) {
		matriz.push([]);
		for (var j = 0; j < this.columna; j++) {
			matriz[i][j] = generarAleatorio();
		};
	};
	return matriz;	
}
ArrayMatematicos.prototype.generarMatrizVacia = function() {
	var matriz = [];
	for (var i = 0; i < this.fila; i++) {
		matriz.push([]);
		for (var j = 0; j < this.columna; j++) {
			matriz[i][j] = 0;
		};
	};
	return matriz;	
}

// Devuelve la matriz en forma de cadena
ArrayMatematicos.prototype.mostrar = function() {
	var cadena = '<pre>';

	for (var i = 0; i < this.fila; i++) {
		for (var j = 0; j < this.columna; j++) {
			cadena += this.matriz[i][j] + "	";
		};
		cadena += '<br>';
	};
	cadena += '</pre>';

	return cadena;
};

//Suma dos matrices y devuelve el resultado
ArrayMatematicos.prototype.sumar = function(sumando2) {
	

	//Si no coinciden las dimensiones devuelve null
	if (!this.mismasDimensiones(sumando2)) {
		return null;
	}
	else {
		var suma = new ArrayMatematicos(this.fila, this.columna);
		for (var i = 0; i < this.fila; i++) {
			for (var j = 0; j < this.columna; j++) {
				suma.matriz[i][j] = this.matriz[i][j] + sumando2.matriz[i][j];
			};
		};
	}
	return suma;
}

//Método que comprueba si las dos matrices tienen las mismas dimensiones
ArrayMatematicos.prototype.mismasDimensiones = function(otraMatriz) {
	if(this.fila == otraMatriz.fila && this.columna == otraMatriz.columna) {
		return true;
	}
	return false;
}

//Método que restará dos matrices con las mismas dimendiones
ArrayMatematicos.prototype.restar = function(sustraendo) {
	

	//Si no coinciden las dimensiones devuelve null
	if(!this.mismasDimensiones(sustraendo)) {
		return null;
	}
	else {
		var resta = new ArrayMatematicos(this.fila, this.columna);
		for (var i = 0; i < this.fila; i++) {
			for (var j = 0; j < this.columna; j++) {
				resta.matriz[i][j] = this.matriz[i][j] - sustraendo.matriz[i][j];
			};
		};	
	}
	return resta;
}

ArrayMatematicos.prototype.trasponer = function() {
	var traspuesta = new ArrayMatematicos(this.columna, this.fila);

	for (var i = 0; i < this.columna; i++) {
		for (var j = 0; j < this.fila; j++) {
		 	traspuesta.matriz[i][j] = this.matriz[j][i];
		}; 
	};
	return traspuesta;
}

ArrayMatematicos.prototype.multiplicar = function(factor2) {
	

	//Si no coinciden las dimensiones devuelve null
	if(!this.mismasFil2Col1(factor2)) {
		return null;
	}
	else {
		var producto = new ArrayMatematicos(this.fila, factor2.columna);
		for (var i = 0; i < this.fila; i++) {
			for (var j = 0; j < factor2.columna; j++) {
				producto.matriz[i][j] = 0;
				for (var k = 0; k < this.columna; k++) {
					producto.matriz[i][j] += this.matriz[i][k] * factor2.matriz[k][j];
				};
			};
		};
	}

	return producto;
}

ArrayMatematicos.prototype.mismasFil2Col1 = function(otraMatriz) {
	if(this.columna == otraMatriz.fila) {
		return true;
	}
	return false;
}