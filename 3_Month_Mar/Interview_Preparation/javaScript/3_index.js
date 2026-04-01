// spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let finalArr = [...arr1, ...arr2];
console.log(finalArr);
// Output: [1, 2, 3, 4, 5, 6]

// rest operator
function sum(...numbers) {
  console.log(numbers);
  return numbers;
}
console.log(sum(1, 2, 3, 4));
// Output: [1, 2, 3, 4]

// closure
function outer() {
  let name = "Anshu";
  function inner() {
    console.log(name);
  }
  return inner();
}
console.log(outer());
// Output: Anshu

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This is an IIFE");
})();
// Output: This is an IIFE

// Self Invoking Function Expression (SIFE)
(function () {
  console.log("This is a SIFE");
})();
// Output: This is a SIFE

// == vs ===
// == check only value both side
// === check value and Data Types also

const a = 10;
const b = "10";
if (a == b) {
  console.log(true);
} else {
  console.log(false);
}
// Output: True

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}
// Output: False

// Higher Order Function

function onefunction(name) {
  const a = 5;
  console.log(a);
  return "Hello " + name;
  // var b = 10
  // console.log(b)
}
console.log(onefunction());
// Output: 5
