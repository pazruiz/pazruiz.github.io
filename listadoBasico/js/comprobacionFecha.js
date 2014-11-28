/*
	Tarea tema 3. Listado básico
	
	8. Implementa ComprobacionFecha que solicite el día, el mes y el
	   año e indique si la fecha es correcta. Si lo fuera, ha de mostrar
	   el día después.

	@author Paz Ruiz García
	@since 24/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Comprobacion Fecha</h1>"
				+ "<p>8. Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la fecha es correcta. Si lo fuera, ha de mostrar el día después.</p>"
			  );

document.write("<form name='form' action='javascript:mostrarDiaSiguiente()'>"
				+ "Introduzca una fecha. Si es válida se mostrará el día siguiente."
				+ "<div class='label'>"
				+ "<label for='dias'>Día</label>"
				+ "<select id='dias' name='dias' required>"
				+ "<option value='1'>1</option>"
				+ "<option value='2'>2</option>"
				+ "<option value='3'>3</option>"
				+ "<option value='4'>4</option>"
				+ "<option value='5'>5</option>"
				+ "<option value='6'>6</option>"
				+ "<option value='7'>7</option>"
				+ "<option value='8'>8</option>"
				+ "<option value='9'>9</option>"
				+ "<option value='10'>10</option>"
				+ "<option value='11'>11</option>"
				+ "<option value='12'>12</option>"
				+ "<option value='13'>13</option>"
				+ "<option value='14'>14</option>"
				+ "<option value='15'>15</option>"
				+ "<option value='16'>16</option>"
				+ "<option value='17'>17</option>"
				+ "<option value='18'>18</option>"
				+ "<option value='19'>19</option>"
				+ "<option value='20'>20</option>"
				+ "<option value='21'>21</option>"
				+ "<option value='22'>22</option>"
				+ "<option value='23'>23</option>"
				+ "<option value='24'>24</option>"
				+ "<option value='25'>25</option>"
				+ "<option value='26'>26</option>"
				+ "<option value='27'>27</option>"
				+ "<option value='28'>28</option>"
				+ "<option value='29'>29</option>"
				+ "<option value='30'>30</option>"
				+ "<option value='31'>31</option>"
				+ "</select>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='meses'>Segundo número</label>"
				+ "<select id='meses' name='meses' required>"
				+ "<option value='1'>Enero</option>"
				+ "<option value='2'>Febrero</option>"
				+ "<option value='3'>Marzo</option>"
				+ "<option value='4'>Abril</option>"
				+ "<option value='5'>Mayo</option>"
				+ "<option value='6'>Junio</option>"
				+ "<option value='7'>Julio</option>"
				+ "<option value='8'>Agosto</option>"
				+ "<option value='9'>Septiembre</option>"
				+ "<option value='10'>Octubre</option>"
				+ "<option value='11'>Noviembre</option>"
				+ "<option value='12'>Diciembre</option>"
				+ "</select>"
				+ "</div>"
				+ "<div class='label'>"
				+ "<label for='anno'>Tercero número</label>"
				+ "<input type='number' id='anno' name='anno' min=1900 placeholder='min 1900' required></br>"
				+ "</div>"
				+ "<input type='submit' name='enviar' value='Comprobar'> "
				+ "<input type='reset' name='limpiar' value='Limpiar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );

// Función para obtener el día del formulario
function getDia(){
	var listaDias = document.getElementById("dias");
	var dia = listaDias.options[listaDias.selectedIndex].value;
	return parseInt(dia);
};

// Función para obtener el mes del formulario
function getMes(){
	var listaMeses = document.getElementById("meses");
	var mes = listaMeses.options[listaMeses.selectedIndex].value;
	return parseInt(mes);
};

// Función para obtener el año del formulario
function getAnno(){
	var anno = document.getElementById("anno").value.trim();
	return parseInt(anno);
};

// Función para comprobar si un año es bisiesto
function esBisiesto(anno){
	if ((anno % 100 != 0) && ((anno % 4 == 0) || (anno % 400 == 0))) {
		return true;
    }else {
    	return false;
    };
};
function comprobarFecha(dia, mes, anno){

	//Comprobamos el día y el mes
	switch(mes){
		case 2:
			if(esBisiesto(anno)){
				if(dia > 29){
					return false;
				}
			} else {
				if (dia > 28){
					return false;
				};
			};
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			if (dia > 30) {
				return false;
			};
			break;
		default:
			return true;
			break;
	};
	
}
//Función para mostrar el día siguiente
function mostrarDiaSiguiente(){
	var dia = getDia();
	var mes = getMes();
	var anno = getAnno();

	var diaSiguiente = dia+1;

	switch(mes){
		case 2:
			if(esBisiesto(anno)){
				if(diaSiguiente > 29){
					diaSiguiente = 1;
					mes++;
				};	
			} else {
				if(diaSiguiente > 28){
					diaSiguiente = 1;
					mes++;
				};
			};
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			if (diaSiguiente > 30) {
				diaSiguiente = (diaSiguiente-30);
				mes++;
			};
			break;
		case 12:
			if(diaSiguiente > 31){
				diaSiguiente = (diaSiguiente-31);
				mes = 1;
				anno++;
			};
			break;
		default:
			if(diaSiguiente > 31){
				diaSiguiente = (diaSiguiente-31);
				mes++;
			};
			break;
	};
		
	// Mostramos al usuario:
	document.getElementById("resultado").innerHTML = "<p><b>El día siguiente es " + diaSiguiente + "/" + mes + "/" + anno + ".</b></p>";
};