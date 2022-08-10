//! Type Aliases/Custom Types

// The syntax for creating custom types
type Combinable = number | string;

function combine(input: Combinable) {
  console.log(input);
}

//! Union Types in TS
/* 
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Gio", "Tina");
console.log(combinedNames); */