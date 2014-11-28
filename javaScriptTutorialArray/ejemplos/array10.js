/*
	Make a generic function filter(arr, func) which filters an array
	using given function.
	Only those elements for which func(elem) returns true should
	compose the result.
	
	Every element which pass through and returns new array which
	contains only numeric values from arr.

	An example of how it should work:
	arr = ["a", -1, 2, "b"]

	arr = filter(arr, isNumeric)
	// arr = [-1, 2], only numeric in result

	arr = filter(arr, function(val) { return val > 0 })
	// arr = [2] , for other values function returns false

	@author Paz Ruiz García
	@since 12/11/2014

*/

var arr = ["a", -1, 2, "b"];


var array = filter(arr, isNumber);

function filter(arr, func) {
	var newArr =[];
	for(var i = 0; i < arr.length; i++) {
     	var result = func(arr[i]);
      	if(result === true) {
        	newArr.push(arr[i]);    
    	}
	}
}

function isString(value) {
	if (typeof value === 'string'){
		return true;
	};
	return false;
}

function isNumber(value) {
	if (typeof value === 'number'){
		return true;
	};
	return false;
}

function isFunction(value) {
	if (typeof value === 'function'){
		return true;
	};
	return false;
}

var array = filter(arr, isNumber);