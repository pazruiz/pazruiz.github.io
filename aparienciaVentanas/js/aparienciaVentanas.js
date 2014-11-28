/*
	Tarea tema 3. Apariencia de las ventanas
	
	Crea la siguiente página Web (lo más dinámica posible) dónde el
	botón crea una nueva ventana ubicada en la esquina superior
	izquierda de la pantalla (top = 0, left = 0) y con los tamaños
	indicados.

	Métodos a utilizar:
	•	window.open()
	•	document.write() 
		o	Añade el esqueleto básico: html, head, title, body, ul...


	@author Paz Ruiz García
	@since 28/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Apariencia de las ventanas</h1>"
				+ "<p style='text-align: justify;'>Crea la siguiente página Web (lo más dinámica posible) dónde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.</p>"
			  	+ "<p>Métodos a utilizar:</p>"
			  	+ "<ul>"
			  	+ "<li>window.open()</li>"
			  	+ "<li>document.write()"
			  	+ "<ul>"
			  	+ "<li>Añade el esqueleto básico: html, head, title, body, ul...</li>"
			  	+ "</ul>"
			  	+ "</li>"
			  	+ "</ul>"
			  	);

document.write("<input type='button' value='Abre una Ventana' onclick='abrirVentana()'>"
				+ "</div>"
				+ "</div>"
			  );


function abrirVentana() {
	var ventana = window.open("", "", "height=200, width=300, top=0, left=0");
	ventana.window.open();
	ventana.document.write("<!DOCTYPE html>"
							   	+ "<html lang=\"es\">"
								+ "<head>"
								+ "<meta charset=\"UTF-8\">"
								+ "<title>Ventana de Prueba</title>"
								+ "</head>"
								+ "<body>"
								+ "<div id=\"contenedor\">"
								+ "<div id=\"principal\">"
								+ "<p>Se han utilizado las propiedades:</p>"
								+ "<ul>"
			  					+ "<li>height=200</li>"
			  					+ "<li>width=300</li>"
			  					+ "</ul>"
								+ "</div>"
								+ "</div>"
								+ "</body>"
								+ "</html>");
		ventana.document.close();

}