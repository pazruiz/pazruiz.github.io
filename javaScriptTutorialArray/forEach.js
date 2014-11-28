// Define la función de devolución de llamada
function verResultado(value, index, ar) {
    console.log("valor: " + value);
    console.log(" índice: " + index);
}

// Create an array.
var letras = ['ab', 'cd', 'ef'];

// Llamamos a la función de devoloución de llamada
// verResultado para cada elemento de la matriz.
letras.forEach(verResultado);

// Salida:
//  valor: ab index: 0 
//  valor: cd index: 1 
//  valor: ef index: 2 
