/*
	Tarea tema 3. Listado básico
	
	3. Implementa MultiplosDeCinco que pida 7 números e indique
	si alguno es múltiplo de 5.

	@author Paz Ruiz García
	@since 23/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Multiplos de Cinco</h1>"
				+ "<p>3. Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.</p>"			
			  );

document.write("<form name='form' action='javascript:mostrarMultiplosCinco(document.forms.form)'>"
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
				+ "<div class='label'>"
				+ "<label for='number4'>Cuarto número</label>"
				+ "<input type='number' id='numero4' min=1 required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='number5'>Quinto número</label>"
				+ "<input type='number' id='numero5' min=1 required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='number6'>Sexto número</label>"
				+ "<input type='number' id='numero6' min=1 required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='number7'>Septimo número</label>"
				+ "<input type='number' id='numero7' min=1 required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Aceptar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<p>Multiplos de 5: </p>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

function mostrarMultiplosCinco(formulario) {
	//Almacenaremoslos multiplos de cinco en un array
	var multiplos = new Array();
	var resultado = "";

	for (var i = 0; i < formulario.length; i++) {
		if(formulario.elements[i].value % 5 == 0) {
			multiplos.push(formulario.elements[i].value);
		}
	}
	//Guardamos el resultado en una cadena
	if(multiplos.length != 0){
		resultado = multiplos.toString();
	} else {
		resultado = "Ninguno";
	}
	// Lo mostramos por partalla
	document.getElementById("resultado").innerHTML = "<p>" + resultado + "</p>";
}

