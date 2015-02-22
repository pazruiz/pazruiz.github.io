/*
	Tarea 8.3. Comunicándome con AJAX: sugerencias mediante php

	Utilizando Ajax, realiza una comunicación con el servidor que reciba
	sugerencias de nombres almacenadas en un array php. El funcionamiento
	será el siguiente: 
	•	Página html con un input.
	•	Conforme se introduzca texto, se buscarán las coincidencias en un
		array php que contendrá los nombres de los compañeros del módulo.
	•	Las sugerencias (coincidencias en el array) se mostrarán en un div. 
	•	En caso de no haber coincidencia, se mostrará el mensaje "No hay
		coincidencias".
	•	Asegúrate de mantener la compatibilidad de los navegadores. 

*/

// Constantes de estado:
var READY_STATE_UNITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var peticion;

function mostrarSugerencias(str) {
	if(str.length == 0){
		document.getElementById("txtSugerencia").innerHTML = "";
		return;
	} else {
		peticion = inicializarPeticion();
		peticion.onreadystatechange = function() {
			if (peticion.readyState == READY_STATE_COMPLETE && peticion.status == 200) {
				document.getElementById("txtSugerencia").innerHTML = peticion.responseText;
			};
		}
		peticion.open("GET", "script/alimentos.json" + srt, true);
		peticion.send();
	}

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
