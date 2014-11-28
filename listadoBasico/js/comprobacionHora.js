/*
	Tarea tema 3. Listado básico
	
	9. Implementa ComprobacionHora que solicite los segundos,
	   minutos y hora e indique si es correcta. Si lo fuera,
	   ha de mostrar la hora un segundo después.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Comprobacion Hora</h1>"
				+ "<p>9. Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si es correcta. Si lo fuera, ha de mostrar la hora un segundo después.</p>"
			  );

document.write("<form name='form' action='javascript:mostrarSegundoSiguiente()'>"
				+ "Introduzca una hora. Si es válida se mostrará un segundo después."
				+ "<div class='label'>"
				+ "<label for='horas'>Hora</label>"
				+ "<input type='number' id='hora' name='hora' min=0 max=23 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='minutos'>Minutos</label>"
				+ "<input type='number' id='minutos' name='minutos' min=0 max=59 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='segundos'>Segundos</label>"
				+ "<input type='number' id='segundos' name='segundos' min=0 max=59 placeholder='min 0' required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

// Función para obtener la hora del formulario
function getHora(){
	var hora = document.getElementById("hora").value.trim();
	return parseInt(hora);
};

// Función para obtener los minutos del formulario
function getMinuto(){
	var minuto = document.getElementById("minutos").value.trim();
	return parseInt(minuto);
};

// Función para obtener los segundos del formulario
function getSegundo(){
	var segundo = document.getElementById("segundos").value.trim();
	return parseInt(segundo);
};

//Función para obtener y devolver el segundo siguiente de una hora:
function mostrarSegundoSiguiente(){
	var hora = getHora();
	var minuto = getMinuto();
	var segundo = getSegundo();

	var segundoSiguiente = segundo+1;

	if (segundoSiguiente > 59){
		segundoSiguiente = "00";
		minuto++;
		if(minuto > 59){
			minuto = "00";
			hora++;
			if(hora > 23){
				hora = "00";
			};
		};
	};

	// Mostramos al usuario:
	document.getElementById("resultado").innerHTML = "<p><b>El segundo siguiente es " + hora + ":" + minuto + ":" + segundoSiguiente + ".</b></p>";
};