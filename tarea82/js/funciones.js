/*
	Utilizando Ajax, realiza una comunicación con el servidor que reciba y
	muestre un fichero html. El funcionamiento será el siguiente: 
	•	Página html con una caja de texto donde se indica una url que vas
		a descargar del servidor. Inicialmente aparecerá la propia página.
	•	Al pulsar el botón "mostrar" mostrará el fichero en un scroller
	•	En un div debe mostrarse en todo momento el estado en el que se
		encuentra la petición AJAX, indicando tanto el valor numérico como
		su descripción ("No inicializada", "Abierta"... "Completada")
		(readyState).
	•	También se mostrará el código y texto del estado de la respuesta
		del servidor en otro div (status y statusText).
	•	Asegúrate de mantener la compatibilidad con navegadores antiguos.
	•	Organiza las instrucciones javascript de forma estructurada. Una
		buena opción es definir un fichero para el manejo de objeto
		XMLHttpRequest y otro para el resto.
	•	Utiliza estilos y diseña la página de forma equilibrada.
	•	En la misma ruta, deja un fichero index2.html para probar la carga
		de otros ficheros.
*/

// Constantes de estado:
var READY_STATE_UNITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var peticion;

function cargarContenido(url, metodo, funcion) {
	peticion = inicializarPeticion();

	if (peticion) {
		// Se encarga de procesar la respuesta del servidor
		peticion.onreadystatechange = funcion;
		//Realizar la petición HTTP al servidor
		peticion.open(metodo, url, true);
		//Se envía la petición al servidor
		peticion.send(null);
	};
}

function inicializarPeticion() {
	// Obtener la instancia del objeto XMLHttpRequest
    // Para navegadores que siguen los estándares
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	//Para navegadores obsoletos(IE6 y anteriores)	
	} else if (window.ActiveXObject) {
		return new ActiveXObject('Microsoft.XMLHTTP');
	};
}

function mostrarContenido() {
	campoEstados.innerHTML += '<p><strong>- Enviando petición...</strong></p>';
	// Muestra el estado de la petición:
	peticion.onreadystatechange = function() {
		campoEstados.innerHTML += '<p><strong>readyState:</strong> ' + peticion.readyState + ' <strong>Status:</strong> ' + peticion.status  + 
		' <strong>StatusText:</strong> ' + peticion.statusText + '</p>';
		
		// Manda abajo del todo la barra de scroll del campo estados
		campoEstados.scrollTop = campoEstados.scrollHeight;

		/* Si la petición es correcta y se completa, muestra el fichero
	 	en el div, si no, informa del error
	 	*/
	 	if (peticion.readyState == READY_STATE_COMPLETE) {
	 		if (peticion.status == 200) {
	 			campoFichero.value = peticion.responseText;
	 		} else if (peticion.status == 404) {
	 			campoFichero.value = 'ERROR: no pudo obtenerse el fichero, revise la dirección introducida.';
	 		}
	 	};
	};
}

// Obtiene el fichero mediante GET
function descargarArchivo() {
	cargarContenido(campoUrl.value, 'GET', mostrarContenido);
}

function limpiar() {
	campoFichero.value = "";
	campoEstados.innerHTML = "";
}

window.onload = function() {
	campoUrl = document.getElementById('campoUrl');
	campoFichero = document.getElementById('fichero');
	campoEstados = document.getElementById('estados');

	// Valores iniciales del input y del campo fichero
	campoUrl.value = window.location.href;
	campoFichero.value = 'Introduzca una dirección en el formulario';
	campoEstados.innerHTML = '<p>Realice una petición...</p>';

	document.getElementById('enviar').addEventListener('click', descargarArchivo, false);
	document.getElementById('limpiar').addEventListener('click', limpiar, false);
};