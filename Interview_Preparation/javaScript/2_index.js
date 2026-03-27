// JavaScript, React.js, Node.js

// 1. Set Timeout  - Synchronous code
console.log("Start");
setTimeout(() => {
  console.log("Before End");
}, 1000);
console.log("End");
// Output: Start, End, Before End (after 1 second)

// Callback function - Asynchronous code
const getData = (callBackFunction) => {
  console.log("Hello Get Data");
  callBackFunction();
};
const callBackFunction = () => {
  console.log("Call Back Function Called");
};
getData(callBackFunction);
// getData(() => console.log("Call Back Function Called"));
// Output: Hello Get Data, Call Back Function Called

// 2. Promises - Asynchronous code
// 1. Resolve - Success
// 2. Reject - Failure
// 3. Pending - Waiting for the result

const myPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
// Output: Promise Resolved

// 3. Async/Await - Asynchronous code
const myAsyncFunction = async () => {
  // API Intergration
  // DB Call - add,delete,update - await
};
