/*
	A prime number is a natural number which has exactly two
	distinct natural number divisors: 1 and itself.

	To find all the prime numbers less than or equal to a given
	integer n by Eratosthenes’ Sieve:

	Create a list of consecutive integers from two to n: 
	(2, 3, 4, ..., n).
	Set p=2, the first prime number.
	Strike from the list all multiples of p less than or equal
	to n. (2p, 3p, 4p, etc.)
	Set p to first not striked number in the list after p.
	Repeat steps 3-4 until p*p > n.
	All the remaining numbers in the list are prime.
	There is also an animation available.

	Implement the Eratosthenes’ Sieve in JavaScript. Compute the
	sum of all primes up to 100 and alert it.

	@author Paz Ruiz García
	@since 12/11/2014

*/

console.log(eratosthenes(100).join(' - '));
/**
 * Encuentra todos los números primos por debajo de n
 * @param  {[Number]} n [Numero a filtrar]
 * @return {[Number]}      [Unicamente los numeros primos]
 */
var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [];
    var limitSup = Math.sqrt(n);
    var salida = [];

    // Crear un array de (n - 1) elementos
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Eliminar multiplos de los primos que empiezan por 2, 3, 5,...
    for (var i = 2; i <= limitSup; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            salida.push(i);
        }
    }

    return salida;
}

