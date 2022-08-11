# Creating classes in TS

In TS, as opposed to JavaScript, we declare properties before the constructor is created (if we are adding the constructor at all).

### With the `constructor` method.

```tsx
class Car{
	make: string; // This bit is the difference between TS & JS

	constructor(make: string){
		this.make = make;
	}

}

const tesla = new Department("Tesla Model S");
console.log(tesla) // => Tesla Model S
```

### Without the `constructor` method

```tsx
class Car{
	make: string = 'Mercedes CL'

}

const car = new Department();
console.log(car.make) // => Mercedes CL
```

# Private & Public modifiers

👉 By default, all members of a class in TypeScript are **public**. All the public members can be accessed anywhere without any restrictions. 

👉 The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.

```tsx
// private property example

class Employee {
    private empCode: number;
    empName: string;
}

let emp = new Employee();

emp.empCode = 123; // Compiler Error
emp.empName = "Gio";//OK
```

## Shorthand initialisation

Without Shorthand initialisation, we usually declare our class properties like this:

```tsx
class Dog {
	breed: string;
	color: string;
	species: string = "Canis lupus familiaris"
	
	constructor(breed: string, color: string){
		this.breed = breed;
		this.color = color;
	}
}
```

If we want to avoid declaring properties first and then using `this` keyword to assign values to those properties (as illustrated above), we can use shorthand initialisation.

**What is shorthand initialisation?**

With shorthand initialisation we avoid writing the verbose class properties and just roll all the properties into our constructor method. 

```tsx
class Dog {
	species: string = "Canis lupus familiaris"
	~~breed: string;
	color: string;~~
	constructor(public breed: string, public color: string){
		~~this.breed = breed;
		this.color = color;~~
	}
}
```

What we did above is we removed additional property declaration and assignment, so we are left with clean, less verbose code. 

## `readonly` properties

`readonly` properties add extra layer of protection. It is there to make it clear that a certain property is there to be initialised once and that’s it. 

```tsx
class Department {
  private employees: string[] = [];

	// * shorthand initialisation example below with **readonly** property.
  constructor(private readonly id: string, public name: string ) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}: ${this.name})`);
  }
}
```

# Inheritance

Inheritance in TS works pretty much the same way as it does in JS.

The keywords **`extends`** and **`super`** are also valid in TypeScript.

💊 **`super`** must be invoked inside the **`constructor`** function!

```tsx
class ITDepartment extends Department {
	admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
		this.admins = admins;
  }
}
```

# `protected` vs `private`

👉 **`private`** properties are only accessible from inside the class they are defined in, and NOT classes that inherit from it! 

👉 **`protected`** keyword acts the same way as private, meaning it can give us that extra security level, but unlike `private`, other class that inherit from the **base class** can access a protected property. 

# getters & setters in TS

- `getter` method has to **`return`** something.
- getter methods are accessed like properties, they are not invoked like a method with `()`
    
    ```tsx
    class AccountingDepartment extends Department {
      private lastReport: string;
    	
    	// getter method
    	get mostRecentReport(){
    		if(this.lastReport){
    			return this.lastReport
    		}
    		throw new Error("No report found.")
    	}
    
      constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
      }
    
    	addReport(text: string) {
    	    this.reports.push(text);
    	    this.lastReport = text;
    	  }
    }
    
    const accounting = new AccountingDepartment("PDP-101-ACC", []);
    
    console.log(accounting.mostRecentReport) // NO INVOKATION HERE!
    ```
    
- `setters` take in a parameter
- `setters` also don’t need to be invoked:
    
    ```tsx
    // the rest of the class code omitted for brevity...
    set mostRecentReport(value: string){
    		if(!value){
    			throw new Error("Please pass in a valid value!")
    		}
    		this.addReport(value);
    	}
    
    // This is how we use a setter.
    accounting.mostRecentReport = 'Year End Income Tax Report'
    ```
    

# static methods & properties

static methods and properties allow us to add methods and properties to classes, which are NOT accessed to the instance of that class! It can be accessed directly on that class.

 To create a static method or property we use the **`static`** keyword in front of it.

```tsx
// Other Department class-related code omitted for brevity...
class Department {
	static fiscalYear = 2022;
	
	static createEmployee(name: string) {
	    return { name: name };
	}
}

const employee1 = Department.createEmployee("Jenny")
console.log(Department.fiscalYear) // => 2022
```

# Interfaces in TS

🤔 What is an interface?

In a nutshell, interface describes the **structure** of an object. It basically describes how an object should **look** like. 

We create an interface with the **`interface`** keyword, which is a strictly TypeScript keyword, non-existent in JavaScript.

So, essentially, Interface is what we do when we want to **type-cast** a specific class or an object. 

```tsx
interface Person {
  // No specific values in interfaces, these are just 'blueprints' of how a class should look like.
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person; // type casting here, so we know what user1 will look like!

user1 = {
	name: "Gio",
	age: 32,
	greet(phrase: string){
		console.log(`${phrase}! My name is ${this.name}.`)
	}
}
```

## Interfaces with TS classes

- When we use an `interface`, we know that we are creating it to describe how an **OBJECT** will look like, what its structure will be eventually.
- Another feature of interfaces, is that we can `implement` interfaces in a class.
    
    Why we use interfaces with classes, is that it acts as a sort of a contract. A class that implements a specific interace has to use keyword `implements` , which basically means that it adheres to its structure, as it’s defined in that particular interace. 
    
    ```tsx
    interface Greetable {
      name: string;
      greet(phrase: string): void;
    }
    
    class Person implements Greetable {
    	/* 
    		we can add **age** property, but it's important to add everything
    		that is outlined in the Greetable interface! 
    	*/
    
      constructor(public name: string, public age: number) {
    
    	}
    
      greet(phrase: string): void {
        console.log(`${phrase}! My name is ${this.name}.`);
      }
    }
    
    let user1: Greetable;
    ```
    
    <aside>
    💊 Very important! We can also add on top for example an `age` property inside our `Person` class, but it’s very crucial that first we fulfill all the necessities (the contract) that is described/outlined inside our **`Greetable`** interface.
    
    </aside>