/*
	Write a code to alert a random value from array arr:
		var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"]

	P.S. The code to get a random integer from min to max (inclusive) is:
		var rand = min + Math.floor(Math.random()*(max+1-min))

	@author Paz Ruiz García
	@since 10/11/2014

*/

//Declaramos e inicializamos el array "arr"
var arr = ["Ciruela","Naranja","Burro","Zanahoria","JavaScript"];

//Declaramos e inicializamos la variable aleatorio
//que generará un aleatorio entre 0 y 4
var aleatorio = Math.floor(Math.random()*(arr.length-1));

//Mostramos el elemento seleccionado aleatoriamente mediante
//la variable "aleatorio"
console.log(arr[aleatorio]);
