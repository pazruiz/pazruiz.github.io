jQuery.fn.creaTip = function(textoTip, opciones) {
	//opciones por defecto
	var configuracion = {
		velocidad: 500,
		animacionMuestra: {width: "show"},
		animacionOculta: {opacity: "hide"},
		claseTip: "tip"
	}
	//extiendo las opciones por defectocon las opciones del parámetro
	jQuery.extend(configuracion, opciones);
	
	this.each(function(){
		elem = $(this);
		var miTip = $('<div class="' + configuracion.claseTip + '">' + textoTip + '</div>');
		$(document.body).append(miTip);
		elem.data("capatip", miTip);
		
		elem.mouseenter(function(e){
			var miTip = $(this).data("capatip");
			miTip.css({
				left: e.pageX + 10,
				top: e.pageY + 5	
			});
			miTip.animate(configuracion.animacionMuestra, configuracion.velocidad);
		});
		elem.mouseleave(function(e){
			var miTip = $(this).data("capatip");
			miTip.animate(configuracion.animacionOculta, configuracion.velocidad);
		});
	});
	
	return this;
};