/*
	Create a function filterNumeric(arr) which takes an array and
	returns new array which contains only numeric values from arr.

	An example of how it should work:
	arr = ["a", 1, "b", 2];
	arr = filterNumeric(arr);
	// now arr = [1,2]
	
	@author Paz Ruiz García
	@since 10/11/2014
*/

//Declaramos e inicializamos el array "arr"
var arr = ["a", 1, "b", 2];

function filterNumeric(arr) {
	var newArr = [];
	
	for (var i = 0; i < arr.length; i++) {
		if(typeof arr[i] === 'number'){
			newArr.push(arr[i]);
		}
	};
	return newArr;
}

console.log(filterNumeric(arr));