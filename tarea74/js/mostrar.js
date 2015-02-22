jQuery.fn.mostrar = function() {
	this.each(function(){
    	elem = $(this);
    	elem.show(1000);
    });
	return this;
}

  
