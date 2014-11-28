/*
	Tarea tema 3. Suma y producto
	
	Entrega la página sumaYProducto que obtenga la suma y el 
	producto de los números del 1 al 100.
	Utiliza un bucle y analiza mediante los tres depuradores
	cómo analizarías la evolución de las dos variables suma y
	producto.
	Documéntalo todo en un pdf mediante pantallazos.

	@author Paz Ruiz García
	@since 26/10/2014
*/

document.write("<div id='contenedor'>"
				+ "<div id='principal'>"
				+ "<h1>Suma y producto de los números del 1 al 100</h1>"
				+ "<p style='text-align: justify;'>Entrega la página sumaYProducto que obtenga la suma y el producto de los números del 1 al 100. Utiliza un bucle y analiza mediante los tres depuradores cómo analizarías la evolución de las dos variables suma y producto.</p>"
			  );

document.write("<input type='button' value='Mostrar suma' onclick='suma()'> "
				+ "<input type='button' value='Mostrar producto' onclick='producto()'> "
				+ "<br/>"
				+ "<div id='resultado'></div>"
				+ "</div>"
				+ "</div>"
			  );

function suma(){
	var suma = 0;
	for(var i=1; i<=100; i++){
		suma += i;
	}
	document.getElementById("resultado").innerHTML = "<p>El resultado de la suma es: " + suma + "</p>";
};

function producto(){
	var producto = 1;
	for(var i=1; i<=100; i++){
		producto *= i;
	}
	document.getElementById("resultado").innerHTML = "<p>El resultado del producto es: " + producto + "</p>";
};