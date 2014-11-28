/*
	Extender la clase String para que permita truncar una cadena de texto a un tamaño
	indicado como parámetro:
	
	var cadena = "hola mundo";
	cadena2 = cadena.truncar(6); // cadena2 = "hola m"
	
	Modificar la función anterior para que permita definir el texto que indica que la
	cadena se ha truncado:

	var cadena = "hola mundo";
	cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."
	
	@author Paz Ruiz García
	@since 15/11/2014

*/

// Función que permite truncar una cadena de texto a un
// tamaño indicado como parámetro y permite definir el texto
// que indica que la cadena se ha trucado
String.prototype.truncar = function(posicion, texto) {
	
	if(posicion < this.length) {
		return (this.substring(0, posicion)).concat(texto);	
	}

	return this.substring(0, posicion);

}

var cadena = "Pues sepa Vuestra Merced, ante todas cosas, que a mí llaman Lázaro de Tormes, hijo de Tomé González y de Antona Pérez, naturales de Tejares, aldea de Salamanca. Mi nacimiento fue dentro del río Tormes, por la cual causa tomé el sobrenombre; y fue de esta manera: mi padre, que Dios perdone, tenía cargo de proveer una molienda de una aceña que está ribera de aquel río, en la cual fue molinero más de quince años; y, estando mi madre una noche en la aceña, preñada de mí, tomóle el parto y parióme allí. De manera que con verdad me puedo decir nacido en el río.";

document.getElementById("resultado").innerHTML = "<h2>Trucamos una cadena</h2>"
	+ "<p>" + cadena + "</p>";

document.getElementById("result1").innerHTML = "<h3>La cadena truncada queda así...<h3>"

document.getElementById("result2").innerHTML = cadena.truncar(77, ' (Leer más...)');