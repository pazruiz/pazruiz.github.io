window.onload = function () {
	var ventana;
	// Función que crea los listener para escuchar los eventos
	function cargarEventos() {
		document.getElementById("obligatorio").addEventListener("blur", validarObligatorio, false);
		document.getElementById("entero").addEventListener("blur", validarEntero, false);
		document.getElementById("decimal").addEventListener("blur", validarDecimal, false);
		document.getElementById("email").addEventListener("blur", validarEmail, false);
		document.getElementById("dni").addEventListener("blur", validarDni, false);
		document.getElementById("fecha").addEventListener("blur", validarFecha, false);
		document.getElementById("telefono").addEventListener("blur", validarTelefono, false);
		document.getElementById("cuenta").addEventListener("blur", validarCuentaCorriente, false);
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
		document.getElementById("cuenta").addEventListener("select", validarCuentaCorriente, false);
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
		document.getElementById("cuenta").addEventListener("reset", validarCuentaCorriente, false);
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
		document.getElementById("cuenta").addEventListener("change", validarCuentaCorriente, false);
		document.getElementById("url").addEventListener("change", validarUrl, false);
		document.getElementById("checkbox").addEventListener("change", validarCheckbox, false);
		document.getElementById("opcionesRadios1").addEventListener("change", validarRadio, false);
		document.getElementById("opcionesRadios2").addEventListener("change", validarRadio, false);
		document.getElementById("select").addEventListener("change", validarSelect, false);

		document.getElementById("enviar").addEventListener("click", checkearCookie, false);
		document.getElementById("limpiar").addEventListener("click", borrarCookie, false);
	}

	function leerCookies() {
		var cookies, datos, datosCookie = {};

		if (document.cookie === "") {
			return false;
		};

		cookies = document.cookie.split(";");

		for (var i = 0; i < cookies.length; i++) {
			datos = cookies[i].split("=");
			datosCookie[datos[0]] = datos[1];
		};
		return datosCookie;
	}

	function checkearCookie() {
		var contenido = "";
		var datosCookie;
		var propiedad;

		datosCookie = leerCookies();

		if (datosCookie === false) {
			contenido = "No existen datos guardados en las cookies";
		} else {
			contenido += "<ul>";

			for (propiedad in datosCookie) {
				if (datosCookie.hasOwnProperty(propiedad)) {
					contenido += "<li>" + propiedad + ": " + datosCookie[propiedad] + "<li>";
				};
			};
			contenido += "<ul>";
		}

		ventana = window.open("", "", "width=300,height=300");
		ventana.document.open();
		ventana.document.write('<!DOCTYPE html><html lang="es"><head>' +
	                                '<meta charset="UTF-8">' +
	                                '<title>Información de Cookies</title>' +
	                                '</head><body>' +
	                                contenido +
	                                '</body></html>');
		ventana.document.close();
	}

	function borrarCookie() {
		var datosCookie, propiedad;

		datosCookie = leerCookies();

		if(datosCookie !== false ){
			//Borramos cada cookie
			for (propiedad in datosCookie) {
				if (datosCookie.hasOwnProperty(propiedad)) {
					document.cookie = propiedad + "=; expires = Thu, 01 Jan 1995 00:00:00 GMT";
				};
			}

		ventana = window.open("", "", "width=300,height=300");
		ventana.document.open();
		ventana.document.write('<!DOCTYPE html><html lang="es"><head>' +
	                                '<meta charset="UTF-8">' +
	                                '<title>Información de Cookies</title>' +
	                                '</head><body>' +
	                                '<p>Las cookies han sido borradas.</p>' +
	                                '</body></html>');
		ventana.document.close();
		}

	}
}
