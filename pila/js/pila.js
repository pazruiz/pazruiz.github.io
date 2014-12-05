/* 
	Tarea 4.5 Pila

	Implementa las operaciones básicas de una estructura de datos pila
	(stack). Recuerda que una pila es una estructura LIFO donde el último
	elemento en entrar es el primero en salir. Los métodos y atributos a
	implementar son:
		•	Introducir elemento en la pila apilar(elemento)
		•	Sacar elemento de la pila extraer() que devuelva el objeto.
		•	Cima de la pila, que devuelve el elemento de la cima de la pila. (cima())
		•	Propiedad cima de la pila, que siempre almacenará el último 
			elemento.
	En la clase Array de JavaScript implementa los métodos necesarios de
	manera eficiente (prototype), y recuerda hacer las pruebas precisas. 
	Para ello crea una pila mediante formularios donde se añadan elementos
	del tipo Persona (nombre, apellidos, DNI y mostrar en una ventana nueva
	(mostrar())) y se invoquen a todos los métodos.
	
	La interacción con el usuario se realizará a base de formularios lo más
	amigables posible.


	@author Paz Ruiz García
	@since 17/11/2014
*/

//Variable donde se van a almacenar las personas creadas
var personas = [];


//Introduce un elemento al final de la fila
Array.prototype.apilar = function(elem) {
		return this.push(elem);
};

//Elimina el último elemento de la pila
Array.prototype.extraer = function() {
		return this.pop();
};

//Muestra el último elemento de la pila
Array.prototype.cima = function() {
	if(this.size === 0) {
		return false;
	}
	return this[this.length - 1];
};


//Constructor del objeto Persona que tiene nombre, apellidos y dni
function Persona(nombre,apellidos,dni) {
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.dni = dni;
};

//Muestra información de la Persona
Persona.prototype.mostrar = function () {
    var contenido;
    var propiedad;

    contenido = "<table class='table table-striped'><tr>";
    for (propiedad in this) {
        if(this.hasOwnProperty(propiedad)) {
            contenido += "<th>" + propiedad + "</th>";
        };
    };

    contenido += "</tr><tr>";

    for (propiedad in this) {
        if (this.hasOwnProperty(propiedad)) {
            contenido += "<td>" + propiedad + "</td>";
        };
    };

    contenido += "</tr></table>";

    return contenido;
}

// Función para obtener el nombre del formulario
function getNombre(){
    return document.getElementById("nombre").value.trim();
}

// Función para obtener los apellidos del formulario
function getApellidos(){
    return document.getElementById("apellidos").value.trim();
}

// Función para obtener el DNI del formulario
function getDni(){
    return document.getElementById("dni").value.trim();
}

//Función que comprueba si un campo está vacio
function estaVacio(elemento) {
    if((elemento.length == 0) || (elemento == null)) {
        return true;
    }
    return false;
}

//Función que comprueba si un campo está vacio
function estaVacio(elemento) {
    if((elemento.length == 0) || (elemento == null)) {
        return true;
    }
    return false;
}

//Función que devuelve el valor del elemento obtenido por su id
function obtenerValorPorId(elemento) {
    return document.getElementById(elemento).value.trim();
}

//Función que comprueba si el DNI es válido
function esDniValido(elemento){
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X', 'B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    if (/^\d{8}[-]?[a-zA-Z]$/.test(elemento)) {
        // Se comprueba que la letra introducida es correcta
        if (elemento.charAt(elemento.length-1).toUpperCase() == letras[(elemento.substring(0, 8))%23]) {
            return true;
        };
    }
    return false;
}

//Función para validar el campo DNI
function validarDni(){
    var dni = getDni();
    var info = document.getElementById("group-dni");

    if(!estaVacio(obtenerValorPorId("dni")) && !esDniValido(obtenerValorPorId("dni"))) {
        mensaje = "DNI inválido";
        document.getElementById("error_dni").innerHTML = mensaje;
        dni.focus();
        info.className = "has-error";
        return false;
    }
    mensaje = "";
    document.getElementById("error_dni").innerHTML = mensaje;
    info.className = "has-success";
    return true;
}

// Validación de campos al enviar el formulario
function validar() {
    if (validarDni()) {
        return true;
    }
    return false;
} 

function crearPersona() {
	var nombre = getNombre();
    var apellidos = getApellidos();
    var dni = getDni();
    var info = document.getElementById("group-error");
    
    if(nombre === "" || apellidos === "" || dni === "") {
        mensaje = "Debe rellenar todos los campos";
        document.getElementById("error").innerHTML = mensaje;
        info.className = "has-error";
        return;
    };
    mensaje = "";
    document.getElementById("error").innerHTML = mensaje;
    info.className = "has-success";
    validar();

    personas.apilar(new Persona(nombre, apellidos, dni));
}

function verPila() {
    var contVentana;

    contVentana = '<!doctype html>'
        + '<html lang="es">'
        + '<head>'
        + '<meta charset="UTF-8">'
        + '<link href="css/bootstrap.min.css" rel="stylesheet">'
        + '<script type="text/javascript" src="js/pila.js"></script>'
        + '<title>Pila de Personas</title>'
        + '</head>'
        + '<body>'
        + '<div class="row">'
        + '<div class="col-md-4 col-md-offset-4 well well-lg text-center">';

    for (var i = 0; i < personas.length; i++) {
        contVentana += personas[i].mostrar();
    };
    contVentana += '</div></div></body></html>';

    ventanaPersonas = window.open("","", "width=640,height=480");
    ventanaPersonas.document.open();
    ventanaPersonas.document.write(contVentana);
    ventanaPersonas.document.close();
}