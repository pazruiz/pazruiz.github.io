/*
	1.	Crea la página notas.html que almacene en un array x notas,
	siendo x la dimensión elegida por el usuario. Las notas se
	inicializarán de forma aleatoria con enteros entre 0 y 10.
	Se visualizarán las notas resultantes y la media de las mismas.

	@author Paz Ruiz García
	@since 7/11/2014
*/

function generarAleatorio(){
	return Math.floor((Math.random() * 10) + 1);
}

function mostrarNotas() {
	//Cogemos el valor de la longitud del array obtenido del formulario
	var longitud = parseInt(document.getElementById("longitud").value.trim());
	var arrayNotas = new Array(longitud);
	var auxMedia = 0;
	var media = 0;
	var resultado = "";

	for (var i = 0; i < arrayNotas.length; i++) {
		//Inicializamos las posiciones del array
		arrayNotas[i] = generarAleatorio();

		//Acumulamos los valores para calcular la media
		auxMedia += arrayNotas[i];

		//Alamcenamos el array en una cadena para mostrarlo
		if (i != (longitud-1)) {
			resultado = arrayNotas.join(", ");
		} else {
			resultado += arrayNotas[i] + ".";
		};
	};

	//Calculamos la media con dos decimales
	media = parseFloat((auxMedia/longitud)).toFixed(2);

	//Lo Mostramos por pantalla
	document.getElementById("resultado").innerHTML = "<h2>Notas</h2>"
	 + "<p>" + resultado + "</p>"
	 + "<h2>Media</h2>"
	 + "<p>" + media + "</p>";
	
};
