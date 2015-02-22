/*
	Tarea 8.4. Comunicándome con AJAX: Compañeros en una base de datos

	Utilizando Ajax, realiza una comunicación con el servidor que solicite
	los datos de compañeros almacenados en una base de datos. El funcionamiento
	será el siguiente: 
	•	Página html con un select de los nombres de los compañeros (al menos 5
		compañeros del módulo).
	•	Conforme se seleccione una opción, se buscarán las coincidencias en la
		base de datos previamente creada.
	•	Cada registro ha de contener al menos 5 campos (a tu libre elección),
		que vas a visualizar en forma de tabla html.
	•	Asegúrate de mantener la compatibilidad con navegadores antiguos. 
	
	Envía el ejercicio operativo online y copia de los ficheros

*/

// Constantes de estado:
var READY_STATE_UNITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var peticion;

function mostrarSugerencias(str) {
	if(str == ""){
		document.getElementById("txtSugerencia").innerHTML = "";
		return;
	} else {
		peticion = inicializarPeticion();
		peticion.onreadystatechange = function() {
			if (peticion.readyState == READY_STATE_COMPLETE && peticion.status == 200) {
				document.getElementById("txtSugerencia").innerHTML = peticion.responseText;
			};
		}
		peticion.open("GET", "script/alumnos.php?q=" + str, true);
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