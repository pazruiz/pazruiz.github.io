/*
	Tarea tema 3. Listado básico
	
	7. Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
		a. Cuántas cifras tiene (7 cifras)
		b. Lo muestre del revés.

	@author Paz Ruiz García
	@since 24/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Decena</h1>"
				+ "<p>7. Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:</p>"
				+ "<ol type='a'>"
				+ "<li>Cuántas cifras tiene (7 cifras)</li>"
				+ "<li>Lo muestre del revés.</li>"
				+ "</ol>"
			  );

document.write("<form name='form' action='javascript:mostrarResultado()'>"
				+ "Introduzca un número entre 0 y 10 "
				+ "<input type='number' id='numero' min=0 max=10 step='0.0000000001' required></br>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

var resultado= "";
//Función que obtendrá la longitud del número
function getCifras(num){
	var cifras = 0;
	
	if(num.match(/[.]/)) {	// No se cuenta el punto, si es decimal
		cifras = num.length-1;
	}
	else if(num.match(/[,]/)) { //No se cuenta la coma
		cifras = num.length-1;
	}
	else {
		cifras = num.length;
	}
	return cifras;
}

//Función que invierte el orden de las cifras
function invertirCifras(num) {
	num = document.getElementById("numero").value.trim();
	var numInvertido = "";
	var numArray;

	if(num >= 0 && num<= 10){
		num = num.toString();
		//Convertimos la cadena en un array
		numArray = num.split("");
		//Invertimos el array
		numArray.reverse();
		//Volvemos a convertir el array en cadena y lo mostramos
		numInvertido = numArray.join("");
		document.getElementById("resultado").innerHTML = "El número " + num + " invertido queda: " + numInvertido;
	}
	return numInvertido;
}

//Mostramos los resultados por pantalla
function mostrarResultado() {
	var n = document.getElementById("numero").value.trim();
	resultado = "<p>El número de cifras del número introducido \"" + n + "\" son " + getCifras(n) + ".<br/>" + "El número al revés es " + invertirCifras(n); 
	document.getElementById("resultado").innerHTML = resultado;
}