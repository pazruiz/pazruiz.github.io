/** 
	Tarea tema 3. Múltiples ventanas
	
	Crea la siguiente página Web donde el botón crea cinco nuevas
	ventanas ubicadas en la esquina tal y como se muestran.
	Métodos a utilizar:
		•	miVentana = window.open('','','width=200,height=200');
		•	miVentana.document.open();
		•	miVentana.document.write() 
			o	Añade el esqueleto básico: html, head, title, body, ul...
		•	miVentana.document.close();


	@author Paz Ruiz García
	@since 20/10/2014
*/

document.write("<div id=\"contenedor\">"
				+ "<div id=\"principal\">"
				+"<h1>Apertura de multiples ventanas (5)</h1>");
document.write("<input type=\"submit\" onclick=\"abrirVentanas()\" value=\"Abre múltiples ventanas...\">"
				+ "</div>"
				+ "</div>");

//Función que abrirá las cinco ventanas
function abrirVentanas() {
	var ventana;
	
	for(var i = 0; i < 5; i++){
		ventana = window.open("", "", "height=200, width=200, top=" + i*20 + ", left=" + i*20 + "");
		ventana.document.open();
		ventana.document.write("<!DOCTYPE html>"
							   	+ "<html lang=\"es\">"
								+ "<head>"
								+ "<meta charset=\"UTF-8\">"
								+ "<title>Ventana " + (i+1) + "</title>"
								+ "<script type=\"text/javascript\" src=\"js/cerrarVentana.js\"></script>"
								+ "</head>"
								+ "<body>"
								+ "<div id=\"contenedor\">"
								+ "<div id=\"principal\">"
								+ "<p>Ventana " + (i+1) + "</p>"
								+ "<input type=\"button\" onclick=\"cerrar();\" value=\"Cerrar\" />"
								+ "</div>"
								+ "</div>"
								+ "</body>"
								+ "</html>");
		ventana.document.close();
	};

}