/*
	Tarea 6.2.2 Árbol DOM

	•	Fíjate en la página 19 de la presentación del tema. Representa el 
		árbol DOM del documento. Realiza las siguientes acciones:
			o	Accede al elemento html
			o	Accede al body mediante lastChild
			o	Accede al head mediante la lista childNodes
			o	Averigua el número de hijos de body
			o	Añádele un párrafo con el texto "Hola a todos"
			o	Añádele al principio del body una lista (<ol>) con los
				nombres de la pareja a la que perteneces. 
			o	Elimina el último párrafo del documento original ("párrafo
				DOM 3");

	@author Paz Ruiz García
	@since 14/12/2014

*/
var compagneros = ["Juan Pedro Adamuz Canales", 
					"Daniel Cabrera Cebrero",
					"Luis Guirao Carmona",
					"Alejandro Gutierrez Lozano",
					"Daniel Gutierrez Lozano",
					"Antonio León Alcaide",
					"Christopher Muñoz Godenir",
					"Pablo Sánchez Sanvicente"];

window.onload = function () {

	//Acceso al elemento html
	var obHtml = document.documentElement;

	//Acceso al body
	var obBody = obHtml.lastChild;

	//Acceso a head ya que es el primer elemento del array
	var obHead = obHtml.childNodes[0];

	var hijosBody = obBody.childNodes.length;

	//Creamos el párrafo
	var nuevoParrafo = document.createElement("p");
	//Creamos el texto que incluiremos en el párrafo
	var txtParrafo = document.createTextNode("Hola a todos");

	//Añadimos el texto creado al párrafo
	nuevoParrafo.appendChild(txtParrafo);

	//Añadimos el párrafo el body
	obBody.appendChild(nuevoParrafo);
	
	//Creamos una lista
	var lista = document.createElement("ol");

	//Incluimos cada nombre del array compagneros como elemento de la lista
	for (var i = 0; i < compagneros.length; i++) {
		//Creamos los elementos de la lista
		var elemLista = document.createElement("li");
		var txtLista = document.createTextNode(compagneros[i]);
		elemLista.appendChild(txtLista);
		lista.appendChild(elemLista);
	};

	//Añadimos la lista al principio del body
	var primerNodoBody = obBody.firstChild;
	obBody.insertBefore(lista, primerNodoBody);

	//Eliminamos el último párrafo del documento
	obBody.removeChild(obBody.childNodes[obBody.childNodes.length-3]);
}


