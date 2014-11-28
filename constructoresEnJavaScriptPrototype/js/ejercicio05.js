/*
	Añadir a la clase Array un método llamado sin() que permita filtrar los elementos
	del array original y obtenga un nuevo array con todos los valores diferentes al
	indicado:

	var array1 = [1, 2, 3, 4, 5];
	var filtrado = array1.sin(4);  // filtrado = [1, 2, 3, 5]
	
	@author Paz Ruiz García
	@since 15/11/2014

*/

// Función que permite filtrar los elementos de un array
// y los devuelve en un nuevo array

Array.prototype.sin = function(elem) {
	var filtrado = [];
	for (var i = 0; i < this.length; i++) {
		if(this[i]  !== elem ) {
			filtrado.push(this[i]);
		}
	};
	
	return filtrado;

}

var array = ["Pepe", "Toni", "Juan", "Luis"];

var array1 = array.sin("Pepe");

document.getElementById("resultado").innerHTML = "<h2>Filtramos los elementos de un array</h2>"
	+ "<p>[" + array.join(', ') + "]</p>";

document.getElementById("result1").innerHTML = "<h3>El array filtrado queda así...<h3>"

document.getElementById("result2").innerHTML = "[" + array1.join(', ') + "]";