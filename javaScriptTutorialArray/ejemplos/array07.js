/*
	An object has a className property which keeps it’s class names
	delimited by spaces:
		var obj = {
  			className: 'open menu'
		}
	Write a function removeClass(obj, cls) which removes a class
	cls if it is set:
		removeClass(obj, 'open') // obj.className='menu'
		removeClass(obj, 'blabla')  // no changes (no class to remove)

	
	@author Paz Ruiz García
	@since 11/11/2014

*/

var obj = { className: 'open menu' };

function removeClass(elem, cls) {
	var clsArray = elem.className.split(' ');

	for (var i = 0; i < clsArray.length; i++) {
		if (clsArray[i] == cls){
			clsArray.splice(i, 1);
		}
	};
	elem.className = clsArray.join(' ');
}

removeClass(obj, 'menu');
console.log(obj.className); //open