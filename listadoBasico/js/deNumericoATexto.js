/*
	Tarea tema 3. Listado básico
	
	10. Implementa DeNumericoATexto que solicite un número del 0 al
	99 y lo muestre escrito. Por ejemplo, para 12 mostrar: doce, para
	44 mostrar: cuarenta y cuatro. Que sea lo más eficiente posible
	Implementa MultiplicaImpares que multiplique los 20
primeros números impares y muestre el resultado en pantalla.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>De numerico a texto</h1>"
				+ "<p>10. Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que sea lo más eficiente posible.</p>"
			  );

document.write("<form name='form' action='javascript:numeroATexto(getNumero())'>"
				+ "Introduzca un número de 0 a 99, se mostrará escrito."
				+ "<div class='label'>"
				+ "<label for='numero'>Número</label>"
				+ "<input type='number' id='numero' name='numero' min=0 max=99 placeholder='min 0' required></br>"
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

// Función para obtener el número:
function getNumero(){
	return document.getElementById("numero").value.trim();
};
// Función para encontrar y mostrar el número en forma de texto:
function numeroATexto(numero){
	var texto = "";

	if(numero.length == 1){
		switch (numero.charAt(0)){
			case "0":
				texto = "cero";
				break;
			case "1":
				texto = "uno";
				break;
			case "2":
				texto = "dos";
				break;
			case "3":
				texto = "tres";
				break;
			case "4":
				texto = "cuatro";
				break;
			case "5":
				texto = "cinco";
				break;
			case "6":
				texto = "seis";
				break;
			case "7":
				texto = "siete";
				break;
			case "8":
				texto = "ocho";
				break;
			case "9":
				texto = "nueve";
				break;		
		};
	} else if ((numero.length == 2) && (numero.charAt(0) == "1")){
		switch(numero){
			case "10":
				texto = "diez";
				break;
			case "11":
				texto = "once";
				break;
			case "12":
				texto = "doce";
				break;
			case "13":
				texto = "trece";
				break;
			case "14":
				texto = "catorce";
				break;
			case "15":
				texto = "quince";
				break;
			case "16":
				texto = "dieciseis";
				break;
			case "17":
				texto = "diecisiete";
				break;
			case "18":
				texto = "dieciocho";
				break;
			case "19":
				texto = "diecinueve";
				break;
		}
	} else if ((numero.length == 2) && (numero.charAt(0) == "2")){
		n = "veint";
		switch (numero){
			case "20":
				texto = n+"e";
				break;
			case "21":
				texto = n+"iuno";
				break;
			case "22":
				texto = n+"idos";
				break;
			case "23":
				texto = n+"itres";
				break;
			case "24":
				texto = n+"icuatro";
				break;
			case "25":
				texto = n+"icinco";
				break;
			case "26":
				texto = n+"iseis";
				break;
			case "27":
				texto = n+"isiete";
				break;
			case "28":
				texto = n+"iocho";
				break;
			case "29":
				texto = n+"inueve";
				break;
		};
	} else if (numero.length == 2){
		switch(numero.charAt(0)){
			case "3":
				n = "treint";
				break;
			case "4":
				n = "cuarent";
				break;
			case "5":
				n = "cincuent";
				break;
			case "6":
				n = "sesent";
				break;
			case "7":
				n = "setent";
				break;
			case "8":
				n = "ochent";
				break;
			case "9":
				n = "novent";
				break;
		};
		switch(numero.charAt(1)){
			case "0":
				texto = n + "a";
				break;
			case "1":
				texto = n + "a y uno";
				break;
			case "2":
				texto = n + "a y dos";
				break;
			case "3":
				texto = n + "a y tres";
				break;
			case "4":
				texto = n + "a y cuatro";
				break;
			case "5":
				texto = n + "a y cinco";
				break;
			case "6":
				texto = n + "a y seis";
				break;
			case "7":
				texto = n + "a y siete";
				break;
			case "8":
				texto = n + "a y ocho";
				break;
			case "9":
				texto = n + "a y nueve";
				break;
		};
	};

	document.getElementById("resultado").innerHTML ="<p><b>Número a texto:</b> " + texto + ".</p>";
};