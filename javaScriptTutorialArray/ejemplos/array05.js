/*
	An object has a className property which keeps it’s class names
	delimited by spaces:

	var obj = {
  		className: 'open menu'
	}

	Write a function addClass(obj, cls) which adds a class cls, but
	only if it doesn’t yet exist:
		addClass(obj, 'new') // obj.className='open menu new'
		addClass(obj, 'open')  // no changes (class already exists)
		addClass(obj, 'me') // obj.className='open menu new me'
		
		alert(obj.className)  // "open menu new me"

	P.S. Your function shouldn’t add extra spaces.

	@author Paz Ruiz García
	@since 10/11/2014

*/

var obj = {	className : 'open menu'};

function addClass(elem, cls) {
	var c = elem.className.split(' ');

  	for(var i = 0; i < c.length ; i++) {
    	if (c[i] == cls) {
    		return;
    	}
  	}
	
  	elem.className += ' ' + cls;
}


addClass(obj, 'new');
addClass(obj, 'open'); 
console.log(obj.className);   // open menu new;