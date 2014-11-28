/*
	Create a function camelize(str) which transforms a string
	from “my-short-string” to “myShortString”.

	So, all parts after a hyphen become camelcased instead. For
	instance:

		camelize("background-color") == 'backgroundColor'
		camelize("list-style-image") == 'listStyleImage'
	
	Such function may be useful when operating with CSS.

	Note. Remember charAt, substr and check str.toUpperCase()
	function which transforms the string to upper case.

	@author Paz Ruiz García
	@since 11/11/2014

*/

var cadena1 = "background-color";
var cadena2 = "list-style-image";

function camelize(cadena) {
	var srtArray = cadena.split('-');

	//La variable i se inicializa a 1 para que recorra el array
	//a partir de ese índice ya que el valor del indice 0 no varia
  	for(var i = 1 ; i < srtArray.length; i++) {
    	srtArray[i] = srtArray[i].charAt(0).toUpperCase() + srtArray[i].substring(1);
  }

  return srtArray.join('');
  
}

console.log('La cadena1 = "' + cadena1 + '" se transforma en: ' + camelize(cadena1)); // backgroundColor
console.log('La cadena2 = "' + cadena2 + '" se transforma en: ' + camelize(cadena2)); // listStyleImage