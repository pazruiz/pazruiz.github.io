/* 
	Tarea 5.1 Formulario completito
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

	@author Paz Ruiz García
	@since 17/11/2014
*/
var mensaje;
// Agregamos los listeners al cargar el documento
window.onload = cargarEventos;

// Función qye crea los listener para escuchar los eventos
function cargarEventos() {
	document.getElementById("obligatorio").addEventListener("blur", validarObligatorio, false);
	document.getElementById("entero").addEventListener("blur", validarEntero, false);
	document.getElementById("decimal").addEventListener("blur", validarDecimal, false);
	document.getElementById("email").addEventListener("blur", validarEmail, false);
	document.getElementById("dni").addEventListener("blur", validarDni, false);
	document.getElementById("fecha").addEventListener("blur", validarFecha, false);
	document.getElementById("telefono").addEventListener("blur", validarTelefono, false);
	document.getElementById("obligatorio").addEventListener("blur", validarObligatorio, false);
	document.getElementById("cuenta").addEventListener("blur", validarcuenta, false);
	document.getElementById("url").addEventListener("blur", validarUrl, false);
	document.getElementById("checkbox").addEventListener("blur", validarCheckbox, false);
	document.getElementById("opcionesRadios1").addEventListener("blur", validarRadio, false);
	document.getElementById("opcionesRadios2").addEventListener("blur", validarRadio, false);
	document.getElementById("select").addEventListener("blur", validarSelect, false);
	
	document.getElementById("obligatorio").addEventListener("select", validarObligatorio, false);
	document.getElementById("entero").addEventListener("select", validarEntero, false);
	document.getElementById("decimal").addEventListener("select", validarDecimal, false);
	document.getElementById("email").addEventListener("select", validarEmail, false);
	document.getElementById("dni").addEventListener("select", validarDni, false);
	document.getElementById("fecha").addEventListener("select", validarFecha, false);
	document.getElementById("telefono").addEventListener("select", validarTelefono, false);
	document.getElementById("obligatorio").addEventListener("select", validarObligatorio, false);
	document.getElementById("cuenta").addEventListener("select", validarcuenta, false);
	document.getElementById("url").addEventListener("select", validarUrl, false);
	document.getElementById("checkbox").addEventListener("select", validarCheckbox, false);
	document.getElementById("opcionesRadios1").addEventListener("select", validarRadio, false);
	document.getElementById("opcionesRadios2").addEventListener("select", validarRadio, false);
	document.getElementById("select").addEventListener("select", validarSelect, false);

	document.getElementById("obligatorio").addEventListener("reset", validarObligatorio, false);
	document.getElementById("entero").addEventListener("reset", validarEntero, false);
	document.getElementById("decimal").addEventListener("reset", validarDecimal, false);
	document.getElementById("email").addEventListener("reset", validarEmail, false);
	document.getElementById("dni").addEventListener("reset", validarDni, false);
	document.getElementById("fecha").addEventListener("reset", validarFecha, false);
	document.getElementById("telefono").addEventListener("reset", validarTelefono, false);
	document.getElementById("obligatorio").addEventListener("reset", validarObligatorio, false);
	document.getElementById("cuenta").addEventListener("reset", validarcuenta, false);
	document.getElementById("url").addEventListener("reset", validarUrl, false);
	document.getElementById("checkbox").addEventListener("reset", validarCheckbox, false);
	document.getElementById("opcionesRadios1").addEventListener("reset", validarRadio, false);
	document.getElementById("opcionesRadios2").addEventListener("reset", validarRadio, false);
	document.getElementById("select").addEventListener("reset", validarSelect, false);

	document.getElementById("obligatorio").addEventListener("change", validarObligatorio, false);
	document.getElementById("entero").addEventListener("change", validarEntero, false);
	document.getElementById("decimal").addEventListener("change", validarDecimal, false);
	document.getElementById("email").addEventListener("change", validarEmail, false);
	document.getElementById("dni").addEventListener("change", validarDni, false);
	document.getElementById("fecha").addEventListener("change", validarFecha, false);
	document.getElementById("telefono").addEventListener("change", validarTelefono, false);
	document.getElementById("obligatorio").addEventListener("change", validarObligatorio, false);
	document.getElementById("cuenta").addEventListener("change", validarcuenta, false);
	document.getElementById("url").addEventListener("change", validarUrl, false);
	document.getElementById("checkbox").addEventListener("change", validarCheckbox, false);
	document.getElementById("opcionesRadios1").addEventListener("change", validarRadio, false);
	document.getElementById("opcionesRadios2").addEventListener("change", validarRadio, false);
	document.getElementById("select").addEventListener("change", validarSelect, false);
}

//Función que envia un mensaje si el formulario se ha enviado con exito
function mostrarRespuesta() {
	alert ("Todos los campos son válidos.");
}

//Función que devuelve el valor del elemento obtenido por su id
function obtenerValorPorId(elemento) {
	return document.getElementById(elemento).value.trim();
}


//******************************COMPROBACION DE LOS CAMPOS****************//
//Función que comprueba si un campo está vacio
function estaVacio(elemento) {
	if((elemento.length == 0) || (elemento == null)) {
		return true;
	}
	return false;
}


//Función que comprueba si el elemento es un número
function esNumero(elemento) {
	if(isNaN(elemento)) {
		return false;
	}
	return true;
}

//Función que comprueba si un número es decimal
function esDecimal(elemento) {
	if(esNumero(elemento)) {
		if(elemento % 1 != 0) {
			return true;
		}
	}
	return false;
}

//Función que comprueba si la dirección de email tiene formato correcto
function esEmailValido(elemento) {
	if ((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([.]\w+)*/.test(elemento))) {
		return true;
	};
	return false;
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

//Función que comprueba si la fecha es válida
function esFechaValida(elemento){
	if(/^\d{2}\/\d{2}\/\d{4}$/.test(elemento)) {
		var dia = parseInt(elemento.substring(0,2));
		var mes = parseInt(elemento.substring(3,5))-1;
		var anyo= parseInt(elemento.substring(6,10));
		var fecha = new Date(anyo, mes, dia);
		if (dia == fecha.getDate() && mes == fecha.getMonth() && anyo == fecha.getFullYear()) {
			return true;
		}
	}
	return false;
}

//Función que comprueba si  es un número de telefono válido
function esTelefonoValido(elemento){
	if ((/^\d{9}$/.test(elemento)) || (/^\d{3}[-]?\d{3}[-]?\d{3}$/.test(elemento))) {
		return true;
	};
	return false;
}

//Función que comprueba si la cuenta corriente es válida
function esCuentaCorrienteValida(elemento){
	if (/^[0-9]{4}[-][0-9]{4}[-][0-9]{2}[-][0-9]{10}$/.test(elemento)) {
		
		// ELiminacion los guiones
		var banco = elemento.substring(0,4);
    	var sucursal = elemento.substring(5,9);
    	var dc = elemento.substring(10,12);
    	var cuenta = elemento.substring(13,23);
    	var CCC = banco+sucursal+dc+cuenta;

    	var valores = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
        var control = 0;

        for (i = 0; i <= 9; i++){
        	control += parseInt(cuenta.charAt(i)) * valores[i];
        }

        control = 11 - (control % 11);
        if (control == 11){
        	control = 0;
        } else if (control == 10){
        	control = 1;
        }
        
        if (control != parseInt(dc.charAt(1))) {
            return false;
        }
        control=0;
        var zbs="00"+banco+sucursal;
        for (i=0; i<=9; i++){
        	control += parseInt(zbs.charAt(i)) * valores[i];
        }
        
        control = 11 - (control % 11);
        if (control == 11) {
        	control = 0;
        } else if (control == 10){
        	control = 1;
        }

        if (control != parseInt(dc.charAt(0))) {
        	return false;
        }
        
        // Si supera las comprobaciones, la cuenta es valida
        return true;
	};
	return false;
}

//Función que comprueba la url es válida
function esUrlValida(elemento) {
	if (/^((ht|f)tp[s]?:\/\/)?\w+([\.\-\w]+)?\.([a-z]{2,3}|info|mobi|aero|asia|name)(:\d{2,5})?(\/)?((\/).+)?$/.test(elemento)) {
		return true;
	};
	return false;
}

//Función que comprueba si un checkbox está marcado
function estaMarcado(elemento) {
	if (elemento.checked) {
		return true;
	};
	return false;
}

//Función que comprueba si se ha elegido una opcion de radio button
function haElegidoRadio(){
	var radio = document.getElementsByName("radio");
	var marcado = false;

	// Recorrido de las opciones del radio button
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			marcado = true;
		};
	};

	if (marcado) {
		return true;
	};
	return false;
}

//Función que comprueba si se ha elegido una opción del menú desplegable
function haElegidoSelect(elemento) {
	if (elemento.selectedIndex != 0) {
		return true;
	};
	return false;
}
//******************* FIN DE LAS COMPROBACIONES DE LOS CAMPOS ***********//


//*************************VALIDACIONES DE LOS CAMPOS*********************//

//Función que valida el campo obligatorio del formulario
function validarObligatorio() {
	var obligatorio = document.getElementById("obligatorio");
	var info = document.getElementById("group-obligatorio");

	if(estaVacio(obtenerValorPorId("obligatorio"))) {
		mensaje = "Rellene este campo, es obligatorio.";
		document.getElementById("error_obligatorio").innerHTML = mensaje;
		obligatorio.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_obligatorio").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función para validar el campo del número entero
function validarEntero() {
	var entero = document.getElementById("entero");
	var info = document.getElementById("group-entero");

	if(!esNumero(obtenerValorPorId("entero")) || esDecimal(obtenerValorPorId("entero"))) {
		mensaje ="Debe introducir un número entero.";
		document.getElementById("error_entero").innerHTML = mensaje;
		entero.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_entero").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función para validar el campo del número decimal
function validarDecimal() {
	var decimal = document.getElementById("decimal");
	var info = document.getElementById("group-decimal");

	if(!estaVacio(obtenerValorPorId("decimal")) && !esDecimal(obtenerValorPorId("decimal"))) {
		mensaje = "Debe introducir un número decimal.";
		document.getElementById("error_decimal").innerHTML = mensaje;
		decimal.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_decimal").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función para validar el campo email
function validarEmail(){
	var email = document.getElementById("email");
	var info = document.getElementById("group-email");

	if(!estaVacio(obtenerValorPorId("email")) && !esEmailValido(obtenerValorPorId("email"))) {
		mensaje = "Dirección de email inválida";
		document.getElementById("error_email").innerHTML = mensaje;
		email.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_email").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función para validar el campo DNI
function validarDni(){
	var email = document.getElementById("dni");
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

//Función para validar el campo fecha
function validarFecha() {
	var fecha = document.getElementById("fecha");
	var info = document.getElementById("group-fecha");

	if(!estaVacio(obtenerValorPorId("fecha")) && !esFechaValida(obtenerValorPorId("fecha"))) {
		mensaje = "Fecha inválida";
		document.getElementById("error_fecha").innerHTML = mensaje;
		fecha.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_fecha").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}
// Función para validar el campo teléfono
function validarTelefono() {
	var telefono = document.getElementById("telefono");
	var info = document.getElementById("group-telefono");

	if(!estaVacio(obtenerValorPorId("telefono")) && !esTelefonoValido(obtenerValorPorId("telefono"))) {
		mensaje = "Teléfono inválido";
		document.getElementById("error_telefono").innerHTML = mensaje;
		telefono.focus();
		info.className = "has-error";
		return false;
	}
	mensaje = "";
	document.getElementById("error_telefono").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función para validar el campo cuenta corriente
function validarCuentaCorriente(){
	var cuenta = document.getElementById("cuenta");
	var info = document.getElementById("group-cuenta");

	if (!estaVacio(obtenerValorPorId("cuenta")) && !esCuentaCorrienteValida(obtenerValorPorId("cuenta"))) {
		mensaje = "Número de cuenta inválido";
		document.getElementById("error_cuenta").innerHTML = mensaje;
		cuenta.focus();
		info.className = "has-error";
		return false;
	};
	mensaje = "";
	document.getElementById("error_cuenta").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función´que valida el campo URL
function validarUrl() {
	var url = document.getElementById("url");
	var info = document.getElementById("group-url");

	if (!estaVacio(obtenerValorPorId("url")) && !esUrlValida(obtenerValorPorId("url"))) {
		mensaje = "URL inválida";
		document.getElementById("error_url").innerHTML = mensaje;
		url.focus();
		info.className = "has-error";
		return false;
	};
	mensaje = "";
	document.getElementById("error_url").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función que valida si el checkbox está marcado
function validarCheckBox() {
	var checkbox = document.getElementById("checkbox");
	var info = document.getElementById("group-checkbox");

	if (!estaMarcado(checkbox)) {
		mensaje = "Debe marcar una casilla.";
		document.getElementById("error_check").innerHTML = mensaje;
		checkbox.focus();
		info.className = "has-error";
		return false;
	};
	mensaje = "";
	document.getElementById("error_check").innerHTML = mensaje;
	info.className = "has-success";
	return true;
}

//Función que valida el radiobutton
function validarRadio() {
	if(!haElegidoRadio()) {
		mensaje = "Debe elegir una opción";
		document.getElementById("error_radio").innerHTML = mensaje;
		return false;
	};
	mensaje = "";
	document.getElementById("error_radio").innerHTML = mensaje;
	return true;
}

//Función que valida el menú desplegable
function validarSelect() {
	var select = document.getElementById("select");

	if (!haElegidoSelect(select)) {
		mensaje = "Debe elegir una opción del menú.";
		document.getElementById("error_select").innerHTML = mensaje;
		select.focus();
		return false;
	};
	mensaje = "";
	document.getElementById("error_select").innerHTML = mensaje;
	return true;
}

// Validacion de campos al enviar el formulario
function validar() {
	if (validarObligatorio() && validarEntero() && validarDecimal() 
		&& validarEmail() && validarDni() && validarFecha() 
		&& validarTelefono() && validarCuentaCorriente() 
		&& validarUrl() && validarCheckBox() && validarRadio() 
		&& validarSelect()) {
		return true;
	}
	return false;
} 