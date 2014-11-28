/*
	Tarea tema 3. Listado básico
	
	14. Implementa ProductoPotencias que calcule y visualice el
	producto de las potencias de 2 entre 0 y 10.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Producto Potencias</h1>"
				+ "<p>14. Implementa ProductoPotencias que calcule y visualice el producto de las potencias de 2 entre 0 y 10</p>"
			  );

document.write("<input type='button' value='Mostrar producto potencias' onclick='productoPotencias()'> "
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

//Calcula y muestra el producto de las potencias entre 0 y 10
function productoPotencias(){
	var potencia = 0;	// Almacena el valor de la potencia
	var resultado = 1;	// Para almacenar el resultado del producto
	var mensaje = "";	// Para mostrar el calculo como cadena por pantalla

	// Calculamos las potencias desde 2^0 a 2^10 y su producto:
	for (var i = 0; i <= 10; i++) {
		// Calculo de la potencia
		potencia = Math.pow(2,i);
		// Concatenamos el mensaje
		if(i != 10){
			mensaje += ("2^" + i + " * ");
		} else {
			mensaje += ("2^" + i + " = ");
		};
		// Calculamos el producto de las potencias
		resultado *= potencia;
	};

	document.getElementById("resultado").innerHTML = "<p>" + mensaje + resultado + "</p>";
};