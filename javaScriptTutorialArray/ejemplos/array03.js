/*
	Create a function find(arr,value) which finds a value in given
	array and returns its index, or -1 if not found.

	For instance:
		arr = [ "test", 2, 1.5, false ]
		find(arr, "test") // 0
		find(arr, 2) // 1
		find(arr, 1.5) // 2
		find(arr, 0) // -1

	@author Paz Ruiz García
	@since 10/11/2014
*/

//Declaramos e inicializamos el array "arr"
var arr = [ "test", 2, 1.5, false ];

//Mostramos la posición de los valores que le pasamos a la función
//como argumento 
console.log('Muestra el valor de find(arr, "test")' + find(arr, "test")); // 0
console.log('Muestra el valor de find(arr, 2)' + find(arr, 2)); // 1
console.log('Muestra el valor de find(arr, 1.5)' + find(arr, 1.5)); // 2
console.log('Muestra el valor de find(arr, 0)' + find(arr, 0)); // -1

/*
	Función que devolverá la posición del elemento que se pasa
	como argumento
	En caso de que no exista el elemento devuelve -1.
*/
function find(arr,value) {	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value){
			return i;
		}	
	};

	return -1;
}

