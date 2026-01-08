// What is Promises is Js?
// Ans: Promise is for "eventual" completion of task. It is an object in Js.
// It is a solution of callback hell

// Every Promise has 3 states:
// 1. pending ->> initial
// 2. fulfilled ->> resolve(value)
// 3. rejected ->> reject(error)

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  // resolve(123);
  reject("some error occured");
});
