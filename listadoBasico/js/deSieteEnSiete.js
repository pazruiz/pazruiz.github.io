/** 
	Tarea tema 3. Listado básico
	
	2. Implementa DeSieteEnSiete que escriba los números del 100
	al 0 de 7 en siete.

	@author Paz Ruiz García
	@since 23/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>De siete en siete</h1>"
				+ "<p>2. Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete.</p>"			
			  );

for( var i = 100; i >= 0; i-=7) {
	document.write(i + "<br/>");
}
document.write("<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

