/*
	1. Create an array styles with elements “Jazz”, “Blues”.
	2. Append a value “Rock’n’Roll”
	3. Replace the second value from tail by “Classic”. The array
	   should become “Jazz”,”Classic”,”Rock’n’Roll”. The code should
	   work for any array length.
	4. Extract the last value from the array and alert it.

	@author Paz Ruiz García
	@since 10/11/2014
*/

//Declaramos e inicializamos el array "styles"
var styles = ["Jazz", "Blues"];

//Añadimos un elemento al final del array
console.log("Voy a añadir un elemento al final: " + styles.push("Rock’n’Roll"));
//Lo mostramos
console.log(styles);
//Sustituimos el penúltimo elemento por "Classic"
styles[styles.length-2] = "Classic";
//Lo mostramos de nuevo
console.log(styles);