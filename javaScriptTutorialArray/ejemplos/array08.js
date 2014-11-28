/*

	Create a function filterNumericInPlace(arr) which takes an array
	and removes all non-numeric values from it.

	An example of how it should work:
	arr = ["a", 1, "b", 2];
	filterNumericInPlace(arr);
	alert(arr)  // [1,2]

	@author Paz Ruiz García
	@since 11/11/2014

*/

arr = ["a", 1, "b", 2];

function filterNumericInPlace(arr)  {
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			arr.splice(i, 1);
		};
	};
	return arr;
}

filterNumericInPlace(arr);
console.log(arr);