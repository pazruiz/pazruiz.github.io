/*
	Tarea tema 3. Listado básico
	
	4. Implenta NumeroPrimo que pida un número e indique si es primo o no.

	@author Paz Ruiz García
	@since 23/10/2014
*/
document.open();
document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Número primo</h1>"
				+ "<p>4. Implenta NumeroPrimo que pida un número e indique si es primo o no.</p>"			
			  );

document.write("<form name='form' action='javascript:mostrarPrimo()'>"
				+ "<div class='label'>"
				+ "<label for='number'>Introduzca un número</label>"
				+ "<input type='number' id='numero' min=1 required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<p>¿Es primo? </p>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );
document.close();

function mostrarPrimo() {
	var primo = true;
	var divisor = 2;
	var num = document.getElementById("numero").value;

	while (primo && num != divisor && num != 1) {
		if(num % divisor != 0){
			divisor++;
		}
		else {
			primo = false;
		}
	}
	if (primo) {
		document.getElementById("resultado").innerHTML = "El número " + num + " es primo.";
	}
	else{
		document.getElementById("resultado").innerHTML = "El número " + num + " no es primo.";	
	}
	
}

