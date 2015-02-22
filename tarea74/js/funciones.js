$(function(){

	//Mostar  los div con información
	$( "#about" ).click(function() {
		$("#aboutMe" ).mostrar();
	});
	$( ".cerrar" ).click(function() {
		$("#aboutMe" ).ocultar();
	});
	$( "#portFolio" ).click(function() {
					$("#portfolio" ).mostrar();
	});
	$(".cerrar" ).click(function() {
	  $( "#portfolio" ).ocultar();
	});
	$( "#contact" ).click(function() {
	$( "#contacto" ).mostrar();
	});
	$(".cerrar" ).click(function() {
	  $("#contacto" ).ocultar();
	});
	$("#event").click(function() {
	$("#eventos").mostrar();
	});
	$(".cerrar").click(function() {
	  $("#eventos").ocultar();
	});

	//Datepicker
	$.datepicker.setDefaults($.datepicker.regional["es"]);
    $( "#desde,#desde1,#desde2" ).datepicker({
        minDate: 1,
      	maxDate: 15,
      	defaultDate: "+1w",
      	dateFormat: "dd/mm/yy", //el formato de fecha es día/mes/año (ej.: 23/10/2012)
      	changeMonth: true,
      	numberOfMonths: 2,
      	onClose: function( selectedDate ) {
        	$( "#al,#al1,#al2" ).datepicker( "option", "minDate", selectedDate );
      	}
    });
    $( "#al,#al1,#al2" ).datepicker({
        minDate: 1,
      	maxDate: 15,
      	defaultDate: "+1w",
      	dateFormat: "dd/mm/yy",
      	changeMonth: true,
      	numberOfMonths: 2,
      	onClose: function( selectedDate ) {
        	$( "#desde, #desde1, #desde2" ).datepicker( "option", "maxDate", selectedDate );
      	}
    });

    //Tabs
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );


	//Animación
	$('#animacion').animate({'opacity':0, 'z-index': -1}, 5000);
});