import { add } from "./utils/utils.js";
class Person {
    constructor() {
        this.name = "Gio";
        this.age = 32;
    }
    greet() {
        console.log("Hello there!");
    }
}
const gio = new Person();
gio.greet();
console.log(add(42, 42));
