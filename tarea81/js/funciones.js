var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_http;


function cargaContenido(url, metodo, funcion) {
    peticion_http = inicializa_xhr();
 
    if(peticion_http) {

        // Se encarga de procesar la respuesta del servidor
        peticion_http.onreadystatechange = funcion;

        // Realizar peticion HTTP al servidor
        peticion_http.open(metodo, url, true);

        // Se envía la petición al servidor
        peticion_http.send(null);
    }
}
 
function inicializa_xhr() {
    // Obtener la instancia del objeto XMLHttpRequest
    // Para navegadores que siguen los estándares
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    //Para navegadores obsoletos(IE6 y anteriores)
    else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
 
function muestraContenido() {
    //Comprueba que se ha recibido la respuesta del servidor
    if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
            //Se muestra la respuesta del servidor
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = peticion_http.responseText;
        }
    }
}
 
function descargaArchivo() {
    cargaContenido("http://pazruiz.github.io/tarea81/hola.txt", "GET", muestraContenido);
}