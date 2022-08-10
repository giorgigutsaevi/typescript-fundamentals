console.log("hello world, it's gio");
console.log("hi");
console.log("Hola Mundo!");

//! Spread Operator (...)
/* const hobbies: string[] = ["Cooking", "Swimming", "Cinema"];
const activeHobbies: string[] = ["Hiking"];

activeHobbies.push(...hobbies)
console.log(activeHobbies);
*/

//! Rest Operator (...)
/* const add = (...nums: number[]) => {
	return nums.reduce((curr, acc) => {
		return curr + acc
} , 0);
};

const addedNums = add(5, 10, 2.2, 7, 42)
console.log(addedNums)
*/

//! Array & Object destructuring
// Arrays
const hobbies: string[] = ["Cooking", "Swimming", "Cinema"];

const [hobby1, hobby2, ...otherHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2)
console.log(otherHobbies) // => This will be an array, because that's how rest operator works.

// Objects
const person = {
	firstName: 'Giorgi',
	age: 32,
	occupation: "Software Developer"
}

// These have to be exactly as they are mentioned in our person Object, but can change them inside like so:
//? const {firstName : userName, age} = person;
const {firstName, age} = person;

console.log(firstName)
console.log(age)