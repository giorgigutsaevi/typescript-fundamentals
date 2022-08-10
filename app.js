//! Callbacks
// Let's declare our addAndHandle function that takes
// 3 params: 2 numbers and a callback function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(8, 8, function (result) {
    console.log(result);
});
/*
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printNum(num: number): void{
    console.log("Result: " + num)
}

printNum(42) // => Result: 42

let combineValues: Function;

combineValues = add;

console.log(combineValues(42, 42))
*/
