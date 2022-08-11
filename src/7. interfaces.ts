//! Implementing interfaces inside our class
interface Greetable {
  // No specific values in interfaces, these are just 'blueprints' of how a class should look like.
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {

	}

  greet(phrase: string): void {
    console.log(`${phrase}! My name is ${this.name}.`);
  }
}

let user1: Greetable;

user1 = new Person("Giorgi", 32);
console.log(user1)


//! Basic intro to interfaces
/*
interface Person {
  //* No specific values in interfaces, these are just 'blueprints' of how a class should look like.
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
	name: "Gio",
	age: 32,

	greet(phrase: string){
		console.log(`${phrase}! My name is ${this.name}.`)
	}
}
*/
