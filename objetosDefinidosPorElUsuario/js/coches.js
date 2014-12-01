/* Genera cuatro instancias del objeto Coche (propiedades marca, modelo y año).
Imprime sus propiedades en una tabla HTML (<table>). Genera el código desde JavaScript. Cada instancia ha de ocupar una línea (<tr>) y el valor de cada propiedad ha de ocupar una celda (<td>).

	Marca		Modelo		Año de fabricación
	BMW			Serie 7		1977
	Seat		Córdoba		1993
	Ferrari		Testarossa	1984
	Fiat		500			1996

	@author Paz Ruiz García
	@since 16/11/2014
*/


function Coche(marca, modelo, yearFab) {
	this.marca = marca;
	this.modelo = modelo;
	this.yearFab = yearFab;
}

function generaTabla() {
	var coches = [new Coche("BMW", "Serie 7", "1997"),
			 new Coche("Seat", "Córdoba", "1993"),
			 new Coche("Ferrari", "Testarossa", "1984"),
			 new Coche("Fiat", "500", "1996")];
  	
  	// Obtener la referencia del elemento body
  	var resultado = document.getElementById("resultado");
 
  	// Crea un elemento <table> y un elemento <tbody>
	var tabla   = document.createElement("table");
	var tblBody = document.createElement("tbody");
	
	//Creamos la cabecera de la tabla
	tabla.appendChild(crearCabecera("Marca"));
	tabla.appendChild(crearCabecera("Modelo"));
	tabla.appendChild(crearCabecera("Año de fabricación"));
	
	// Crea las celdas
	for (var j = 0; j < coches.length; j++) {
		// Crea las hileras de la tabla
	    var hilera = document.createElement("tr");
	 
	    for (var dato in coches[j]) {
	      	// Crea un elemento <td> y un nodo de texto, haz que el nodo de
	      	// texto sea el contenido de <td>, ubica el elemento <td> al final
	      	// de la hilera de la tabla
	      	var celda = document.createElement("td");
	      	var textoCelda = document.createTextNode(coches[j][dato]);
	      	celda.appendChild(textoCelda);
	      	hilera.appendChild(celda);
	    }
	 
	    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    tblBody.appendChild(hilera);
	  }
	 
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // Añade <table> dentro de <body>
	  resultado.appendChild(tabla);
	  // modifica el ancho de la tabla y lo fija en 50%
	  tabla.className = "table table-striped";
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  //tabla.setAttribute("border", "2");
}

window.onload = function() {
	generaTabla();
};

function crearCabecera (texto) {
	var cabecera = document.createElement("th");
	var cadena = document.createTextNode(texto);
	cabecera.appendChild(cadena);
	return cabecera;
}