//! Creating Generic classes

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

console.log(textStorage)

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2)
numberStorage.addItem(42)
console.log(numberStorage)



//! Creating our own Generic Functions in TS.
type Lengthy = {
  length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"))

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Gio" }, { age: 32 });
// console.log(mergedObj.age)

// const names: Array<string> = [] // this is the same as writing string[]
// names[0].split("")
