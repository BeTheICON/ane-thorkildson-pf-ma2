// question 1.
// creating array petArray with string items: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// question 2.
//console logging value of second item in petArray

var numberOfPets = petArray.length;
console.log(numberOfPets);
// 3

for (var i = 0; i < numberOfPets; i++) {
	console.log(petArray[1]);
}
// cow

// question 3.
// adding the item "sheep" to petArray using push method

petArray.push("sheep");

// question 4.
// console logging number of pets in petArray using length method

var numberOfPets = petArray.length;
console.log(numberOfPets);
// 4

// question 5.
// creating object: catObject with properties name, colour, age

var catObject = {
	name: "Kitty",
	colour: "grey and white",
	age: 2,
};

// question 6.
// console logging the value of the third property of catObject

console.log(catObject.age);

// question 7.
// creating array catArray with the object catObject inside

var catArray = [
	{
		name: "Kitty",
		colour: "grey and white",
		age: 2,
	},
];

// question 8.
// Looping trough array catArray console logging properties of object inside

console.log(catArray.length);
// 1

for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i]);
}
// Object { name: "Kitty", colour: "grey and white", age: 2 }

// question 9.
// creating function logToConsole that accepts 1 argument and console log its value

function logToConsole(wildThing) {
	console.log(wildThing);
}

// question 10.
// calling the function logToConsole passing in the value "donkey"

logToConsole("donkey");
// donkey
