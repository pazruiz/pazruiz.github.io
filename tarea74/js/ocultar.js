jQuery.fn.ocultar = function() {
	this.each(function(){
    	elem = $(this);
    	elem.hide("slow");
    });
	return this;
}

  
