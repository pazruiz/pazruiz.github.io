/*
	Extender el objeto Array para que permita añadir nuevos elementos al final
	del array:

		var array1 = [0, 1, 2];
		array1.anadir(3);
		// array1 = [0, 1, 2, 3]
		Incluir la opción de controlar si se permiten elementos duplicados o no:

		var array1 = [0, 1, 2];

		array1.anadir(2);
		// array1 = [0, 1, 2, 2]

		array1.anadir(2, false);
		// array1 = [0, 1, 2]
	
	@author Paz Ruiz García
	@since 14/11/2014
*/

// Función que añade elementos al final del array
Array.prototype.anadir = function(elem, duplicado) {
	
	if(!duplicado) {
		for (i = 0; i < this.length; i += 1) {
			if (this[i] === elem) {
				return;
			}
		}		
	}

	this[this.length] = elem;

}

// Funcion que añade elementos al final del array y
//  permite evitar añadir elementos duplicados
Array.prototype.contiene = function(elem) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === elem) {
			return true;
		}
	}
	return false;

}

var array1 = [0, 1, 2];

document.getElementById("resultado").innerHTML = "<h2>Añadimos nuevos elementos al array</h2>"
	+ "<p>El array antes de ser modificado es: [" + array1.join(", ") + "]</p>";

array1.anadir(9);

document.getElementById("result1").innerHTML = "Le añadimos un elemento y el array queda así: [" + array1.join(', ') + "]";

array1.anadir(2, false);

document.getElementById("result2").innerHTML = "Ahora no le permitimos duplicar el elemento 2: [" + array1.join(', ') + "]";

array1.anadir(2, true);

document.getElementById("result3").innerHTML = "Ahora sí le permitimos duplicar el elemento 2: [" + array1.join(', ') + "]";
