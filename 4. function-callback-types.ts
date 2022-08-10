//! The 'never' keyword
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error Occcured!", 500);

//* When we throw an error, we never return anything, because essentially throwing an error -
//* means 'crashing' our code. So, because of that, we know that the above function will NEVER - return anything.

//! Callbacks
// Let's declare our addAndHandle function that takes
// 3 params: 2 numbers and a callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(8, 8, (result) => {
  console.log(result);
});

//! Function Types
/* function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(42, 42))
*/
