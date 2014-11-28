/*
	Modificar el ejercicio anterior del objeto Factura para crear una
	pseudoclase llamada Factura y que permita crear objetos de ese tipo.
	Se deben utilizar las funciones constructoras y la propiedad prototype.

	Para instanciar la clase, se debe utilizar la instrucción
	Factura(cliente, elementos), donde cliente también es una pseudoclase
	que guarda los datos del cliente y elementos es un array simple que
	contiene las pseudoclases de todos los elementos que forman la factura.
	
	@author Paz Ruiz García
	@since 13/11/2014
*/

/**
 * Función constructora de Factura
 */
function Factura(cliente, productos) {
  this.cliente = cliente;
  this.productos = productos;
  this.informacion = {
    baseImponible:  0,
    iva:      		0.21,
    irpf: 			0.21,
    total:          0,
    formaPago:      "contado"
  };

}

/**
* Función constructora de Cliente
*/
function Cliente(nombre, direccion, telefono, nif) {
	this.nombre = nombre;
	this.direccion = direccion;
	this.telefono = telefono;
	this.nif = nif;
}

/**
* Función constructora de Producto
*/
function Producto(descripcion, cantidad, precio) {
	this.descripcion = descripcion;
	this.cantidad = cantidad;
	this.precio = precio;
}

//función que calcula el total de la factura
Factura.prototype.calculaTotal = function() {
	for(var i = 0; i< this.productos.length; i++){
		this.informacion.baseImponible += (this.productos[i].cantidad * this.productos[i].precio);
	}
	this.informacion.total = this.informacion.baseImponible 
						  + (this.informacion.baseImponible * this.informacion.iva)
						  - (this.informacion.baseImponible * this.informacion.irpf);
}

//Función que muestra el resultado total de la factura
Factura.prototype.mostrarTotal = function() {
	this.calculaTotal();
	var total = this.informacion.total.toFixed(2);
	document.getElementById("resultado").innerHTML = "<h2>Total factura</h2>" + "<p>" + total + " euros.</p>";
}

//Creamos una factura
var unCliente = new Cliente ("Pepito", "Vive aquí, 5", "957442355", "30555145R");
var venta = [new Producto("producto1", 1, 2),
			 new Producto("producto2", 3, 1.5),
			 new Producto("producto3", 7, 0.5)
			];
var unaFactura = new Factura(unCliente, venta);
unaFactura.mostrarTotal();