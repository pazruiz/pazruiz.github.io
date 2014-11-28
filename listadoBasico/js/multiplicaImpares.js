/*
	Tarea tema 3. Listado básico
	
	11. Implementa MultiplicaImpares que multiplique los 20 primeros
	números impares y muestre el resultado en pantalla.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Multiplica Impares</h1>"
				+ "<p>11. Implementa MultiplicaImpares que multiplique los 20 primeros números impares y muestre el resultado en pantalla.</p>"
			  );

document.write("Se multiplicarán los 20 primeros números impares."
				+ "<br/>"
				+ "<input type='submit' name='enviar' onclick='multiplicaImpares()' value='Multiplicar'> "
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

function multiplicaImpares(){
	// Variable para calcular y almacenar el resultado
	var total = 1;

	// Contador de numeros impares
	var contImpares = 20;

	// Contador
	var n = 1;

	// Realizamos el cálculo:
	while (contImpares > 0){
		if(n % 2 != 0){
			total *= n;
			contImpares--;
		};
		n++;
	};

	// Mostramos por pantalla
	document.getElementById("resultado").innerHTML = "<p>El resultado de multiplicar los 20 primeros números impares es: <b>"
	+ total + ".</b></p>";
};