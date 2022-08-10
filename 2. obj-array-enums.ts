//! ANY type in TS

let anyArr: any[];
anyArr = ["hello", 42, true, false, 8, "world"];
console.log(anyArr);

//! ENUMS in TS
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "100",
  AUTHOR = "AUTHOR",
}

// DEFAULT BEHAVIOUR:
// ADMIN = 0
// READ_ONLY = 1
// AUTHOR = 2

const person = {
  name: "Giorgi",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is ADMIN!", Role.ADMIN);
}

// ! Arrays, Objects and Tuples in TS
/* const person: {
  name: string;
  age: number;
} = {
const person: {
	name: string,
	age: number,
	hobbies: string[],
	role: [number, string],
} = {
  name: "Giorgi",
  age: 32,
  hobbies: ["Sports", "Cooking"],
	// * Tuple example below. An exact number of elements only that can't be mutated or changed. 
	// * To avoid the mutation/alteration of our role Tuple below, we should tell what role is to TS. 
	// * So we go back to the original explicit type-casting
	role: [1, 'admin']
};

let favActivities: string[];
favActivities = ["Gaming"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}*/
