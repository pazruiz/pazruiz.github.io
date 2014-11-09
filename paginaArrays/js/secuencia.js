//Devuelve un número aleatorio entre 0 y 10
function generarAleatorio(){
	return Math.floor((Math.random()*10)+1);
}

function generarVector() {
	var longitud = parseInt(document.getElementById("longitud").value);
	var vector = new Array(longitud);

	//Inicializamos el vector
	for (var i = 0; i < vector.length; i++) {
		vector[i] = generarAleatorio();
	};

	return vector;
}

function mostrarSecuencia() {
	var vector = generarVector();
	var numSec = 1;
	var tamMayorSec = 1;
	var posibleSec = 0;
	var posInicioSecMayor = 0;
	
	for (var i = 0; i < vector.length; i++) {
		if( i == 0) {
			numSec = 1;
			posibleSec = i;
		} else {
			if(vector[i-1] < vector[i]) {
				numSec++;
				if (numSec > tamMayorSec) {
					tamMayorSec = numSec;
					posInicioSecMayor = posibleSec;
				};
			} else {
				numSec = 1;
				posibleSec = i;
			}
		}
	};

	//Lo Mostramos por pantalla
	document.getElementById("resultado").innerHTML = "<h2>Vector</h2>"
	 + "<pre>" + vector + "</pre>"
	 + "<h2>Secuencia más larga</h2>"
	 + "<p>Posición de inicio de la secuencia más larga: " + posInicioSecMayor + "</p>"
	 + "<h2>Mínimo</h2>"
	 + "<p>Longitud de la secuencia más larga: " + tamMayorSec + "</p>";
	
};
