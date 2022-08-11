# What are Generics in TS?

Generics help us give us more information about what we are setting out to achieve with a particular code. This way, we get a better TypeScript support and minimize errors in our codebase. 

```tsx
const names: Array<string> = [] // this is the same as writing string[]
// names[0].split("")
```

Looking at the example above, if we preemptively say that **names** Array will hold all elements that are of type `string`, we can without any doubt, use string-related only operations, such as `split`, `toUpperCase`, `toLowerCase`, etc. 

# Creating our own Generic Function

As, mentioned above, generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

Generics makes it easier to write reusable code. 

In order to create our own Generic Function, we follow the same pattern of using **angle** brackets `< >` followed by defining identifiers. The convention in the industry is to use `T`

that stands for **Type**.

```tsx
function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

const mergedObj = merge({name: "Gio"}, {age: 32});
console.log(mergedObj.age)
```

**Let’s dissect the above code snippet:**

1. We create a function `merge` that essentially just merges to objects and returns the merged object.
2. We then use our angle brackets notation for creating a Generic Function and we define two identifiers `**T**` and `**U**`.
3. We then explicity say that `objA` param will be of `**type T**` , and likewise `objB` will be of **`type U`**
4. If we hover over the `merge` function, it will tell us that `merge`  yields/returns an intersection of `T & U`
5. Now TS knows that what we store in `mergedObj` is the intersection of these two object types (T & U)

<aside>
💊 Generics with functions help make more generalized methods which more accurately represent the types used and returned.

So, what we are telling TypeScript, is that often times we will use different types whether it’s inside our function or our classes.

</aside>

## Constraining our Generics

Often times, when we use Generics, we want to have more control. If we look at the `merge` function example above, we are relying on the runtime inference of TypeScript, but what if we pass just a number instead of passing another object in the function, like so: 

```tsx
const mergedObj = merge({name: "Gio"}, 30); // passing num instead of obj
```

**This will fail silently, it won’t give us any compilation errors.** 

💡To avoid these sort of problems, we want to add extra layer of protection, or constraints to our generics, so we are in control of what type is being used in our functions. To constrain our generics, we use extends keyword inside our angle brackets. 

```tsx
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

// Now the below code will throw and **error**!
const mergedObj = merge({name: "Gio"}, 30); // Comp. Error! 30 is **NOT** an object.

// Because we added a constraint, TS will only expect to pass another obj!
const mergedObj = merge({name: "Gio"}, {anotherName: "Tina"}); 
```

👆 What we are saying above is that, `T` and `U` can be of any kind of information, with all kinds of length, **but in the end it has to be an object**!

# Generic classes

In TS, we can also create Generic classes. 

```tsx
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('cheese');
textStorage.addItem('coffee');
~~textStorage.addItem(1);~~ // WE CAN'T DO THIS! Because it's just a string storage.
console.log(textStorage) 
```

🤔 But why create **generic** classes?

Because, what if instead of one particular data, we want to play with all different kinds. In the example above, we have a Generic `DataStorage` class that has a `data` property on it (which is an array) and it can hold all kinds of generic information. In the example above, we store just `strings`, but what if we want to store something else, let’s say `number`?