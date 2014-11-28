/*
	Tarea tema 3. Listado básico
	
	16. Implementa MuestraDelUnoAlN que pida un número entero y que
	muestre la secuencia del 1 al número indicado. En caso de no
	poder generarse la secuencia (menor que 1), que lo indique.

	@author Paz Ruiz García
	@since 30/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Muestra del Uno al N</h1>"
				+ "<p>16. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la secuencia del 1 al número indicado. En caso de no poder generarse la secuencia (menor que 1), que lo indique.</p>"
			  );

document.write("<form name='form' action='javascript:agregarNumerosLista(getNumero())'>"
				+ "Introduzca un número positivo."
				+ "<div class='label'>"
				+ "<label for='numero'>Número</label>"
				+ "<input type='number' id='numero' name='numero' min=1 placeholder='min 1' required></br>"
				+ "</div>"
				+ "<input type='button' name='secuencia' id='secuencia' value='Mostrar Secuencia' onclick='mostrarSecuencia()'> "
				+ "<input type='reset' name='borrar' value='Borrar'>"
				+ "</form>"
				+ "<br/>"
				+ "<div id='info'></div>"
				+ "<div id='resultado'></div>"
				+ "<br/><a href='index.html'><button type='button'>Volver al índice</button></a>"
				+ "</div>"
				+ "</div>"
			  );
var secuencia = [];

//Función para obtener el número:
function getNumero(){
	return parseInt(document.getElementById("numero").value.trim());
}

//Función mostrar la secuencia de numero de 1 a N
function mostrarSecuencia(num){
	num = this.num = getNumero();
	if(num >= 1) {
		for (var i = 1; i < num; i++) {
			secuencia[i-1] = i;
		};
		return secuencia;
	}
	else {
		return "No pudo inicarse la secuencia.";
	}
	document.getElementById("resultado").innerHTML = "<p>La secuencia es: <b>" + mensaje +  "</b></p>";

}