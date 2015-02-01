jQuery.fn.parpadea = function() {
    //Bucle para reccorrer cada elemento seleccionado
    this.each(function(){
        //Guardamos en una variable el objeto jQuery
        //resultante de estender todas las funcionalidades de la librería
        elem = $(this);
        //Tiempo que durará el efecto de desaparecer
        elem.fadeOut(250, function(){
            //Función callback que mostrará de nuevo el elemento
            $(this).fadeIn(250);
        });
    });
    
    return this;
};