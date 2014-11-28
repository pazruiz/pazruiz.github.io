/** 
	Tarea tema 3. Listado básico
	
	1. Implementa el juego “Adivínalo”. Consiste en que el usuario
	ha de adivinar un número entre el 1 y el 100. Mostrará un
	mensaje:
		a. Para indicar si has acertado (en una nueva ventana)
		b. Para indicar si la solución es mayor o es menor.
	Al finalizar, se le preguntará al usuario si quiere repetir
	el juego.

	@author Paz Ruiz García
	@since 23/10/2014
*/
//Iniciamos un contador de intentos del juego
var intentos = 0;

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Adivínalo</h1>"
				+ "<p>1. Implementa el juego “Adivínalo”. Consiste en que el usuario	ha de adivinar un número entre el 1 y el 100. Mostrará un mensaje:</p>"
				+ "<ol type='a'>"
				+ "<li>Para indicar si has acertado (en una nueva ventana).</li>"
				+ "<li>Para indicar si la solución es mayor o es menor.</li>"
				+ "</ol>"
				+ "<p>Al finalizar, se le preguntará al usuario si quiere repetir el juego.</p>"
			  );			

document.write("<form name='form' action='javascript:adivinalo(getNumero())'>"
				+ "Introduzca un número (entre 0 y 100) "
				+ "<input type='number' id='numero' min='1' max='100'></br>"
				+ "<input type='submit' name='enviar' value='Aceptar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<div>"
				+ "<p><b><span id='resultado'></span></b></p>"
				+ "<p><b>Número de intentos: </b><span id='intentos'>0</span></p><br/>"
				+ "</div>"
				+ "<a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

//Generamos un número aleatorio
var aleatorio = Math.ceil(Math.random() * 100);
var intentos = 0;

function getNumero() {
	return document.getElementById("numero").value;
}

//Función para iniciar un nuevo juego
function nuevoJuego() {
	
	// Se habilitan los botones de introducción:
	document.form.enviar.disabled = false;
	document.form.limpiar.disabled = false;
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("intentos").innerHTML = intentos;
}

// Función que inicia y desarrolla el funcionamiento del juego
function adivinalo(num){
	// Se aumenta el contador de intentos
	intentos++;
	var infoResultado = "";

	if(num < aleatorio) {
		infoResultado = "El número es MAYOR.";
	} 
	else if (num > aleatorio) {
		infoResultado = "El número es MENOR";
	}
	else {
		infoResultado = "¡ACERTASTE!";
		document.getElementById("intentos").innerHTML = intentos;
		document.getElementById("resultado").innerHTML = infoResultado;
		haAcertado();
	}

	// Se informa al usuario
	document.getElementById("resultado").innerHTML = infoResultado;
	document.getElementById("intentos").innerHTML = intentos;
}

// Función ejecutada si el usuario acierta el número, permite reiniciar
function haAcertado(){
	// Se deshabilitan los botones para detener la introducción:
	document.form.enviar.disabled = true;
	document.form.limpiar.disabled = true;

	// Si pregunta al usuario si quiere jugar otra vez
	var confirmar = confirm("¡ACERTASTE a lo(s) " + intentos + " intento(s). ¿Quieres jugar otra vez?");

	// Si quiere jugar otra vez, se reinicia el juego
	if(confirmar){
		nuevoJuego();
	}
}