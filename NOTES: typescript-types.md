# 1.   Core Types in TypeScript

## Primitive Types: number, string and boolean

- **`number`** type - one of the core types in TS → `1, 5.3, -10`
There are no differences with numbers, like big int, floats or negatives, all numbers are numbers in TS. All numbers, no differentiang between integers or floats.
- **`string`** type  - `“Hi”, ‘hello’, `world``
- **`boolean`** type - `true & false`
Just these two, no “truthy” or “falsy” values.
    
    Let’s look at the simple function example, to understand how typecasting works in TypeScript. 
    
    ```tsx
    function add(number1: number, number2: number){
    	return number1 + number2;
    }
    
    const result = add(10, 2.8);
    console.log(result);
    ```
    
    👆 In the above example, we see that the parameters `(number1 & number2)` are **typecasted**, that means that the `add` function, anticipates it gettting two numbers as params, not strings, but numbers only! Otherwise, it will give us an error. 
    
    <aside>
    💊 Typescript is statically typed, which means we **define** the types of variables and parameters during development! 
    
    The key difference is: JavaScript uses *“dynamic types”*, which are resolved at *runtime*. Whereas Typescript uses ***“static types”***, that are set during **development**.
    
    </aside>
    
    🌱 When typecasting in TypeScript, it’s important to note that it’s `string`, `number` & `boolean`, and not *String* or *Number*. The core primitive types in Typescript are all **lowercase**! 
    
    ---
    

## Object Types in TypeScript

Let’s dive into the Object types in TypeScript. 

```tsx
const person = {
	name: "Giorgi",
	age: 32,
}

console.log(person)
```

In TypeScript, we **can’t** access a property that does not exist on the object in question. For example, we can’t access the `nickname` property on the `person` object. We **can’t** do it! 

```tsx
// We CAN'T do the below in TypeScript. It will give us an error!

const person = {
	name: "Giorgi",
	age: 32,
}

console.log(person.nickname) // will tell us that we don't have nickname
```

👉 When we create an object in typescript, we tell it the exact/concrete specifics about **WHAT** properties the object will have. With the above example, we create a `**person**` object, and we told typeScript that it will have only the `name` and `age` properties.

### Accessing properties of object type in TS

If we run the below code snippet, TS will yell at us, because we **explicitly** told the compiler that person is just an object, and we don’t give any other information about it. 

```tsx
const person: object = {
	name: "Giorgi",
	age: 32,
}

console.log(person.name) // THIS WILL NOT WORK!
```

---

To access properties on the object, we have to use the below syntax or just keep it without any explicit type casting. 

```tsx
// const person: {
// name: string;
//  age: number;
// } = {
const person = {
  name: "Giorgi",
  age: 32,
};

console.log(person.name);
console.log(person.age);
```

## Array Types in TypeScript

TypeScript native syntax for type casting what elements go into an array is the following:

```tsx
// For number related array, so we can only populate this array with nums
let numbers: numbers[];
numbers = [1, 2, 3, 4]

// For string array, so we can only populate with strings and nothing else!
let favMovies: string[];
favMovies = ["Amadeus", "Interstellar", "The Dark Knight"]

// For mixed array, populating with a mixture of different types:
let mixedArr = any[];
mixedArr = ['string', 42, false, [1, 2, 3], 'hello']
```

More array examples in TS below:

```tsx
const person = {
  name: "Giorgi",
  age: 32,
  hobbies: ["Sports", "Cooking"],
};

let favActivities: string[];
favActivities = ["Gaming"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
```

## Tuple Types in TypeScript

Tuple is a special data structure in many programming languages, and TypeScript managed to introduce it to its rich toolbox. 

A tuple is a collection of objects which **ordered** and **immutable,** and we want to emulate that when we use it in TypeScript. 

The tuple type-casting **syntax** is usually an array brackets followed by indicating data types inside of it. 

```tsx
const myTuple: [number, string] = [42, 'answer']
```

A more realistic example would be to add a tuple inside an existing object. 

```tsx
// Let's say we have an object and we want to add a specific 'role' tuple. 
const person: {
	name: string,
	age: number,
	hobbies: string[],
	role: [number, string],
} = {
  name: "Giorgi",
  age: 32,
  hobbies: ["Sports", "Cooking"],
	// to type cast role as a tuple, we have to explicitly define it above!
	role: [1, 'admin']
};
```

## Enums Types in TypeScript

Enums or enumerations are a new data type supported in TypeScript. Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.

In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

👉 To create an enum, we use the **`enum`** keyword → `enum {NEW, OLD}`

👉 The convention with enums is always start with a capital letter. 

```tsx
enum Role {
	ADMIN, READ_ONLY, AUTHOR
};

// DEFAULT ENUM BEHAVIOUR:
// ADMIN = 0
// READ_ONLY = 1
// AUTHOR = 2

const person = {
  name: "Giorgi",
  age: 32,
  hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN
};

if(person.role === Role.ADMIN){
	console.log("is ADMIN!", Role.ADMIN) 
}
```

**ALL ENUM DOES IS, IT ASSIGNS LABELS TO NUMBERS!** 

👉 Of course you are not restricted with the **default** `enum` behaviour in TypeScript. You can also assign your own values and mix and match.

```tsx
enum Role {
	ADMIN = "ADMIN", READ_ONLY = '100', AUTHOR = "AUTHOR"
};
```

## The `**any**` Type in TypeScript

**`any`** type means that you can store any kind of value, there is no specific type of assignment. 

```tsx
let anyArr = any[];
anyArr = ['Football', 42, 'movies', false, true, 3]
```

## Type Aliases/Custom Types

We can create our own custom types to use in typecasting in TS.

```tsx
// The syntax for creating custom types
type Combinable = number | string

function combine(input: Combinable){
	console.log(input)
}
```

# 2. Type Assignment & Type Inference

Typescript does a good job at **infering** what type a variable might be. For example, if we were to write the below code, Typescript compiler understands behind the scenes what type the variable will get assigned to. 

```tsx
// Example of type inference
const number = 5;

// Example of strict type casting
const number: number = 5;
```

Essentially, both of the above variable assignment examples are valid Typescript code. 

It sometimes is reduntant to use strict type casting when declaring a variable and assigning a value to it. But it’s a good idea to use typecasting when we just declare a variable, WITHOUT assigning a value to it. For example:

```tsx
let number; // This is considered a bad practice and might introduce bugs!
let myString; // this is also a bad practice!

let number: number; // This is the correct approach in TypeScript.
let myString: string 
```

# 3. Function return Types & `“void”`

All functons in TypeScript have an innate `return` **type**. 

```tsx
function add(n1: number, n2: number): number { // :number in question
  return n1 + n2;
}

// The above function, written like this means that the add function
// Will always return a number!
```

---

But not all functions will return something ALL the time. Some functions are there just to do a specific task, based on the circumstances. Enter **`void`** keyword. When a function does not inherently return any value, we can use **`void`** keyword as its return type. Essentially, it means this `printNum` function does not return anything!

 Let’s take a look at the following snippet:

```tsx
function printNum(num: number): void{
	console.log("Result: " + num)
}

printNum(42) // => Result: 42
```

## Function as Types

In TypeScript, we can type cast with Function types as well. 

🤔 But what if we want to be more **precise** about WHAT KIND of function we want to store inside a variable?

```tsx
function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(42, 42))
```

What we are doing above, is that we are EXPLICITLY telling TypeScript, that combineValues variable, should take a function with 2 parameters and return a number. The usual syntax of Function Types is like this:

```tsx
let var: (paramsHere) => number
```

## Callbacks

The principle with callbacks in our TS functions follows the same pattern as above. 

```tsx
// Let's declare our addAndHandle function that takes
// 3 params: 2 numbers and a callback function
function addAndHandle(
	n1: number,
	n2: number, 
	cb: (num: number) => void
){
  const result = n1 + n2
	cb(result)
}

addAndHandle(8, 8, (result) => {
	console.log(result)
})
```