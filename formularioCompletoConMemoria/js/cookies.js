/* 
	Tarea 5.2 Formulario completito con memoria


	Crea un formulario con todos los tipos de controles y realiza todas
	las validaciones posibles mediante JavaScript.
	Utiliza el modelo de registro avanzado de eventos según W3C
	(addEventListener), así como las expresiones regulares.
	Asegúrate de validar lo siguiente:
		•	Obligatoriedad (campo de texto, opción seleccionada (checkbox,
			radio button y selección)
		•	Tipo de dato introducido (numérico...)
		•	Dirección de correo válida
		•	Número de DNI válido
		•	Fecha válida
		•	Número de teléfono
		•	Número de cuenta corriente
		•	URL
	Asegúrate de que:
		1.	Al perder el foco de cada control se comprueba su validación.
		2.	Los errores los muestras mediante css.
		3.	Al enviar el formulario se realizan TODAS LAS VALIDACIONES,
			yéndose el foco al primer error.
	Procura aislar las validaciones del interfaz del usuario (arquitectura
	de tres capas).

	Una vez estén todos los datos correctos en el formulario anterior, 
	almacénalos mediante cookies. Proporciona un botón para que puedan 
	ser mostrados en una nueva página.

	@author Paz Ruiz García
	@since 14/12/2014

*/

//***************************    COOKIES    ***********************//

/*//chrome no permite guardar cookies en las que el dominio es localhost,
tiene que ser un dominio acabado en nombre de dominio, por ejemplo .com - 
https://code.google.com/p/chromium/issues/detail?id=56211*/
function setCookie(c_name,value,exdays) { 
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays==null) ? "" : "; expires = " + exdate.toUTCString());
	document.cookie = c_name + " = " + c_value;


function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
	  c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
	  c_value = null;
	}
	else {
	  c_start = c_value.indexOf("=", c_start) + 1;
	  var c_end = c_value.indexOf(";", c_start);
	  if (c_end == -1) {
		c_end = c_value.length;
	  }
	  c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

function checkCookie() {
	var cObligatorio = getCookie("cObligatorio");
	if (cObligatorio != null && cObligatorio != "") {
		  document.getElementsByTagName('h3')[0].innerHTML += "<br>Campo obligatorio: " + cObligatorio;
	}
	else if (cEntero != null && cEntero != "") {
		document.getElementsByTagName('h3')[1].innerHTML += "<br>Campo entero: " + cEntero;
	};
}

function borrarTodo(eventopordefecto) {
	if(confirm("¿Seguro que desea borrar todo?")) {
		setCookie("cObligatorio", "", -1)		
		window.location.reload();
		return true;
	}
	else {
		eventopordefecto.preventDefault(); 
		return false; // Salimos de la función devolviendo false. 
	}
}