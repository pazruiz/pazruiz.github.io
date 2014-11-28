/*
	Create a function ageSort(people) to sort array of people objects
	by their age.

	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }
	var people = [ john, mary, bob ]
	ageSort(people) // now people is [ bob, mary, john ]

	Output people names after sorting.

	@author Paz Ruiz García
	@since 11/11/2014

*/

var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]

function ageCompare(a, b) {
 	if (a.age > b.age){
  		return 1;
  	} 
  	else if (a.age < b.age) {
  		return -1;
  	}
  	else{
  		return 0;
  	}
}

function ageSort(people) {
	people.sort(ageCompare);
}

ageSort(people);// now people is [ bob, mary, john ]

// Comprobamos el orden
for(var i=0; i<people.length; i++) {
  console.log(people[i].name);
}