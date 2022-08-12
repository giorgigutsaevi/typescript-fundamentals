import { Greetable, add } from "./utils/utils.js";

class Person implements Greetable{
	name: string = "Gio"
	age: number = 32

	greet(){
		console.log("Hello there!")
	}

}

const gio = new Person();
gio.greet()

console.log(add(42, 42))