/*
	Tarea tema 3. Listado básico
	
	6. Implementa OrdenaTres que pida tres números y los muestre
	ordenados de menor a mayor.

	@author Paz Ruiz García
	@since 24/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Ordena Tres</h1>"
				+ "<p>6. Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.</p>"
			  );

document.write("<form name='form' action='javascript:ordenarNum()'>"
				+ "<div class='label'>"
				+ "<label for='number1'>Primer número</label>"
				+ "<input type='number' id='numero1' min=1 required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='number1'>Segundo número</label>"
				+ "<input type='number2' id='numero2' min=1 required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='number3'>Tercero número</label>"
				+ "<input type='number' id='numero3' min=1 required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<p>Los números ordenados de menor a mayor son: </p>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );



function ordenarNum() {
	 var num1 = document.getElementById("numero1").value.trim();
	 var num2 = document.getElementById("numero2").value.trim();
	 var num3 = document.getElementById("numero3").value.trim();
	
	if ((num1 < num2) && (num1 < num3)) {
		if(num2 < num3){
			document.getElementById("resultado").innerHTML = "<p>" + num1 + " < " + num2 + " < " + num3 + "</p>";
		} else {
			document.getElementById("resultado").innerHTML = "<p>" + num1 + " < " + num3 + " < " + num2 + "</p>";
		}
	} else if ((num2 < num1) && (num2 < num3)) {
		if(num3 < num1){
			document.getElementById("resultado").innerHTML = "<p>" + num2 + " < " + num3 + " < " + num1 + "</p>";
		} else{
			document.getElementById("resultado").innerHTML = "<p>" + num2 + " < " + num1 + " < " + num3 + "</p>";
		}
	} else if ((num3 < num1) && (num3 < num2)) {
		if(num1 < num2){
			document.getElementById("resultado").innerHTML = "<p>" + num3 + " < " + num1 + " < " + num2 + "</p>";
		} else{
			document.getElementById("resultado").innerHTML = "<p>" + num3 + " < " + num2 + " < " + num1 + "</p>";
		}
	}
	
}
