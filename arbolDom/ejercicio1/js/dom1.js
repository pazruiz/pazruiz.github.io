/*
	Tarea 6.2 Árbol DOM

	•	Fíjate en la página 10 de la presentación del tema.Es el árbol DOM
		de una página Web concreta. Crea el documento HTML al que representa.
			o Indica el número de nodos que tiene
	
	@author Paz Ruiz García
	@since 14/12/2014

*/

/*
//Objeto que representa elemento raíz
var obHtml = document.documentElement;

//Indica el número de nodos que tiene el documeto raíz
//Al utilizar esta propiedad me dice que sólo hay uno
var numNodos = obHtml.childElementCount;

//Mostramos en consola el número de nodos que tiene la página
console.log("El número de nodos de la páginas es:" + numNodos);
*/

var numNodos = document.childNodes.length;
console.log("El número de nodos de la páginas es: " + numNodos);