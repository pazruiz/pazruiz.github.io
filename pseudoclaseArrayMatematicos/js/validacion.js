var error = "";

// Valida si el campo recibido del formulario es válido
function validar(campo){
	if(isNaN(campo)){
		error = '<p class="well well-lg">Debe introducir un número entre 1 y 20.</p>';
		document.getElementById("error").innerHTML = error;
		return false;
	} else if (campo < 1) {
		error = '<p class="well well-lg">Debe introducir valores mayores o iguales a 1.</p>';
		document.getElementById("error").innerHTML = error;
		return false;
	} else if (campo > 20) {
		error = '<p class="well well-lg">Debe introducir valores menores o iguales a 20.</p>';
		document.getElementById("error").innerHTML = error;
		return false;
	} else if (campo % 1 != 0) {
		error = '<p class="well well-lg">No introduzca números decimales.</p>';
		document.getElementById("error").innerHTML = error;
		return false;
	};

	// Se limpia el mensaje si habia un error previo, cuando el formulario es válido
	error = "";
	document.getElementById("error").innerHTML = error;
	return true;
}


// Valida la informacion obtenida, y si lo es, crea y suma las matrices
function validaYSuma() {
	// Obtencion de valores de filas y columnas del formulario
	var filas1 = document.getElementById('filas1').value.trim();
	var columnas1 = document.getElementById('columnas1').value.trim();
	var filas2 = document.getElementById('filas2').value.trim();
	var columnas2 = document.getElementById('columnas2').value.trim();
	
	// Utilizadas para mostrar al usuario
	var mostrarMatriz1 = "";
	var mostrarMatriz2 = "";
	var mostrarMatrizResultado = "";

	
	// Si es valido, se crean dos matrices con valores aleatorios
	var matriz1 = new ArrayMatematicos(filas1,columnas1);
	var matriz2 = new ArrayMatematicos(filas2,columnas2);
	// Se realiza la suma
	
	// Se guardan en cadenas las matrices, para mostrar
	mostrarMatriz1 = matriz1.mostrar();
	mostrarMatriz2 = matriz2.mostrar();
	document.getElementById('matriz1').innerHTML = 'MATRIZ 1<br />'
		+ mostrarMatriz1;
	document.getElementById('matriz2').innerHTML = 'MATRIZ 2<br />'
		+ mostrarMatriz2;

	var resultadoSuma = matriz1.sumar(matriz2);
	
	if(resultadoSuma == null) {
		error = '<p class="well well-lg">Los valores introducidos no son válidos para poder sumar las matrices. Revise los campos y compruebe que el número de filas y columnas de ambas matrices sean iguales.</p>';
		document.getElementById("error").innerHTML = error;
		document.getElementById('resultado').innerHTML = '';
		return;
	}

	mostrarMatrizResultado = resultadoSuma.mostrar();
	
	// Muestra al usuario
	document.getElementById('resultado').innerHTML = 'SUMA<br />' +
		mostrarMatrizResultado;

	// Se limpia el mensaje de error si habia un error previo, cuando el formulario es válido
	error = "";
	document.getElementById("error").innerHTML = error;
	
};

// Valida la informacion obtenida, y si lo es, crea y resta las matrices
function validaYResta() {
	// Obtencion de valores de filas y columnas del formulario
	var filas1 = document.getElementById('filas1').value.trim();
	var columnas1 = document.getElementById('columnas1').value.trim();
	var filas2 = document.getElementById('filas2').value.trim();
	var columnas2 = document.getElementById('columnas2').value.trim();
	
	// Utilizadas para mostrar al usuario
	var mostrarMatriz1 = "";
	var mostrarMatriz2 = "";
	var mostrarMatrizResultado = "";

	//Se crean dos matrices con valores aleatorios
	var matriz1 = new ArrayMatematicos(filas1,columnas1);
	var matriz2 = new ArrayMatematicos(filas2,columnas2);
	
	// Se guardan en cadenas las matrices, para mostrar
	mostrarMatriz1 = matriz1.mostrar();
	mostrarMatriz2 = matriz2.mostrar();
	
	// Muestra al usuario
	document.getElementById('matriz1').innerHTML = 'MATRIZ 1:<br />'
		+ mostrarMatriz1;
	document.getElementById('matriz2').innerHTML = 'MATRIZ 2:<br />'
		+ mostrarMatriz2;

	// Se realiza la resta
	var resultadoResta = matriz1.restar(matriz2);

	if(resultadoResta == null) {
		error = '<p class="well well-lg">Los valores introducidos no son válidos para poder restar las matrices. Revise los campos y compruebe que el número de filas y columnas de ambas matrices sean iguales.</p>';
		document.getElementById("error").innerHTML = error;
		document.getElementById('resultado').innerHTML = '';
		return;
	}
	
	mostrarMatrizResultado = resultadoResta.mostrar();
		
	//Se muestra al usuario
	document.getElementById('resultado').innerHTML = 'RESTA:<br />' +
			mostrarMatrizResultado;

	// Se limpia el mensaje de error si habia un error previo, cuando el formulario es valido
	error = "";
	document.getElementById("error").innerHTML = error;
};

// Valida la informacion obtenida, y si lo es, crea y multiplica las matrices
function validaYMultiplica() {
	// Obtencion de valores de filas y columnas del formulario
	var filas1 = document.getElementById('filas1').value.trim();
	var columnas1 = document.getElementById('columnas1').value.trim();
	var filas2 = document.getElementById('filas2').value.trim();
	var columnas2 = document.getElementById('columnas2').value.trim();
	
	// Utilizadas para mostrar al usuario
	var mostrarMatriz1 = "";
	var mostrarMatriz2 = "";
	var mostrarMatrizResultado = "";

	// Se crean dos matrices con valores aleatorios
	var matriz1 = new ArrayMatematicos(filas1,columnas1);
	var matriz2 = new ArrayMatematicos(filas2,columnas2);

	// Se guardan en cadenas las matrices, para mostrar
	mostrarMatriz1 = matriz1.mostrar();
	mostrarMatriz2 = matriz2.mostrar();

	// Muestra al usuario
	document.getElementById('matriz1').innerHTML = 'MATRIZ 1:<br />'
		+ mostrarMatriz1;
	document.getElementById('matriz2').innerHTML = 'MATRIZ 2:<br />'
		+ mostrarMatriz2;

	// Se realiza la multiplicacion
	var resultadoProducto = matriz1.multiplicar(matriz2);
	
	if (resultadoProducto == null) {
		error = '<p class="well well-lg">Los valores introducidos no son válidos para poder multiplicar las matrices. Revise los campos y compruebe que el número de columnas de la primera matriz y filas de la segunda sean iguales.</p>';
		document.getElementById("error").innerHTML = error;
		document.getElementById('resultado').innerHTML = '';
		return;
	};

	mostrarMatrizResultado = resultadoProducto.mostrar();

	// Se muestra al usuario	
	document.getElementById('resultado').innerHTML = 'PRODUCTO:<br />' +
		mostrarMatrizResultado;

	// Se limpia el mensaje de error si habia un error previo, cuando el formulario es valido
	error = "";
	document.getElementById("error").innerHTML = error;
};

// Valida la informacion, y si lo es, traspone las matrices
function validaYTraspone(){
	// Obtencion de valores de filas y columnas del formulario
	var filas1 = document.getElementById('filas1').value.trim();
	var columnas1 = document.getElementById('columnas1').value.trim();
	var filas2 = document.getElementById('filas2').value.trim();
	var columnas2 = document.getElementById('columnas2').value.trim();
	
	// Utilizadas para mostrar al usuario
	var mostrarMatriz1 = "";
	var mostrarMatriz2 = "";
	var mostrarTraspuesta1 = "";
	var mostrarTraspuesta2 = "";

	// Se crean dos matrices con valores aleatorios
	var matriz1 = new ArrayMatematicos(filas1,columnas1);
	var matriz2 = new ArrayMatematicos(filas2,columnas2);
	
	// Se guardan en cadenas las matrices, para mostrar
	mostrarMatriz1 = matriz1.mostrar();
	mostrarMatriz2 = matriz2.mostrar();

	// Se muestra al usuario
	document.getElementById('matriz1').innerHTML = 'MATRIZ 1: <br />'
		+ mostrarMatriz1;
	document.getElementById('matriz2').innerHTML = 'MATRIZ 2: <br />'
		+ mostrarMatriz2;

	// Se trasponen las matrices
	var traspuesta1 = matriz1.trasponer();
	var traspuesta2 = matriz2.trasponer();

	if (traspuesta1 == null || traspuesta2 == null) {
		error = '<p class="well well-lg">No se puede trasponer las matrices. Revise los campos.</p>';
		document.getElementById("error").innerHTML = error;
		document.getElementById('resultado').innerHTML = '';
		return;
	};

	mostrarTraspuesta1 = traspuesta1.mostrar();
	mostrarTraspuesta2 = traspuesta2.mostrar();

	// Se muestra al usuario
	document.getElementById('resultado').innerHTML = 'TRASPUESTA MATRIZ 1:<br />'
		+ mostrarTraspuesta1
		+ 'TRASPUESTA MATRIZ 2:<br />'
		+ mostrarTraspuesta2;

	// Se limpia el mensaje de error si habia un error previo, cuando el formulario es valido
	error = "";
	document.getElementById("error").innerHTML = error;
};