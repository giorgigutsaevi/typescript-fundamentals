//! returning and changing a class in Class Decorator

function MakeTemplate(element: string, elementId: string) {
  return <T extends { new (...args: any[]): { make: string } }>(target: T) => {
    return class extends target {
      constructor(..._: any[]) {
        super();
        const htmlEl = document.getElementById(elementId)!;
        if (htmlEl) {
          htmlEl.innerHTML = element;
          htmlEl.querySelector("h1")!.textContent = this.make;
        }
      }
    };
  };
}

@MakeTemplate("<h1>Hello World</h1>", "app")
class Car {
  public make: string = "Mercedes CL";
  constructor() {}
}

const mercedes = new Car();

/*
function testDecorator(target: any, key: string) {
  console.log('target ->', target);
  console.log(key);
}

class Food {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  @testDecorator
  set setFoodName(foodName: string) {
    this.name = foodName;
  }

  printFood() {
    console.log(this.name);
  }
}

const food = new Food("Cheese");
console.log(food);
*/

/*
! Converting this decorator function into a Factory
function Logger(logString: string) {
  // this way we can pass params.
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, id: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const element = document.getElementById(id);
    const person = new constructor();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = person.name;
    }
  };
}

@Logger("LOGGING - PERSON") // If we write a decorator this way, we have to execute the wrapper Logger function!
@WithTemplate("<h1>Hello World!</h1>", "app")
class Person {
  name: string = "Gio";

  constructor() {
    console.log("Creating a person object...");
  }
}

const gio = new Person();

/*

/* 
function Logger(constructor: Function){
	console.log("Logging...");
	console.log(constructor)
}

@Logger
class Person {
  name: string = "Gio";

	constructor(){
		console.log("Creating a person object...")
	}
}

const gio = new Person();

console.log(gio)
*/
