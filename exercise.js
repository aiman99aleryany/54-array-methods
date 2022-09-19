// Create a function called nicknameMap that takes in an array of people and returns an array of nicknames. The nickname should be composed in this way: <name>-<age>.

// Example:

// { name: 'Paul', age: 21 } => Paul-21

function nicknameMap(arr) {
  return arr.name + "-" + arr.age; // the plus operator will trigger the string conversion, and will convert anything into a string. cool javascript :)
}

const people = [
  { name: "Paul", age: 21 },
  { name: "Aiman", age: 23 },
];
// the task didn't specify where you to put the returned values so I will just print them.
console.log(people.map(nicknameMap));
