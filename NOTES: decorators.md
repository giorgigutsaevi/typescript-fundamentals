# What are Decorators?

👉 **Decorators** are just functions that can be used to modify/change different properties and/or methods in the class.

👉 **Decorators** are used inside or on classes only. They can be applied to a class, a property, a method, an accessor (setters & getters) or an argument of a method.

👉 **Decorator** can be a plain decorator function or a decorator *factory*. 

👉 **Decorators** receive different **arguments** depending where they are used.

👉 **Decorators are executed one single time, when the class is DEFINED! And not when the instance of that class is created.**

👉 **Decorators** are a feature that can be useful for meta-programming, what that means is that they can be useful and be used by other developers. 

👉 **Decorators** are mostly used with classes. A decorator function usually is written with a capital letter, so for example → `function Logger(){}` 

👉 **Decorators** are used to **tinker** around with the internals of the class in clever ways

<aside>
💊 **REMEMBER:**
Decorators are executed when the class is **defined**, NOT when the class is *instantiated*!

</aside>

```tsx
// One way to create a decorator
function Logger(target: any, key: string){
	console.log("Logging...");
	console.log(target)
}

@Logger // this is how Decorators are 'applied' to classes. @ is a must!
class Person {
  name: string = "Gio";

	constructor(){
		console.log("Creating a person object...")
	}
}

const gio = new Person();
```

<aside>
💊 The `console.logs` inside our `**Logger**` **decorator** function will run first! Before the logs from class is ran.

</aside>

## Decorator Factories

Decorator factories are nothing else than a function returning another function. 

```tsx
//! Converting this decorator function into a Factory
function Logger(logString: string) { // this way we can pass params.
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON") 
class Person {
  name: string = "Gio";

  constructor() {
    console.log("Creating a person object...");
  }
}

const gio = new Person();
```

- function **`Logger`** teturns another *anonymous* function that takes in the `constructor` as an parameter.
- The outer/wrapper **`Logger`** function can now also take in parameters.
- If we write a factory function, than we have to **execute** it on top of a class definition.
    
    ```tsx
    @Logger() // executing it on top of class
    class Person {
    	// code goes here...
    } 
    
    // we can also pass arguments to a factory function
    
    @Logger("HELLO WORLD, I'M GIORGI") // passing an argument here
    class Person {
    	// code goes here...
    } 
    ```
    

# Class Decorator returning and changing a Class

Decorators are powerful because not only they can add some tweaking, but they can also alter the entire class `constructor` function, essentially changing its behaviour. 

```tsx
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
```

In the example above, we change the behaviour of `Car` class’s `constructor` function, to have the ability to add an `h1` HTML element to the DOM, only when it’s been **instantiated**.