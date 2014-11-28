// Frame global que sera manejado en las funciones
var frameDerecho = window.parent.frames[1];

// Carga la pagina de teoria en el marco derecho
function mostrarPaginaTeoria(){
	frameDerecho.location = "teoria.html";
}

// Carga la pagina de ejercicios en el marco derecho
function mostrarPaginaEjercicios(){
	frameDerecho.location = "ejercicios.html";
}