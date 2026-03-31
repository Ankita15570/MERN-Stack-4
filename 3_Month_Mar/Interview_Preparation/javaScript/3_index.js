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
