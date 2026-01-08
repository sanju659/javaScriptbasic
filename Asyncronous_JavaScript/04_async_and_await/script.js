/*
async and await are modern JavaScript features (introduced in ES2017) 
that make asynchronous code much easier to read and write. 
They build directly on top of Promises 
but let you write async code that looks and feels synchronous.

->> async keyword in front of a function:
    - Makes the function always return a Promise.
    - Allows you to use await inside it.

->> await keyword (only usable inside an async function):
    - Pauses the execution of the function until the Promise on the right resolves (or rejects).
    - Gives you the resolved value directly (no .then() needed).
    - If the Promise rejects, it throws an error that you can catch with 'try/catch'.
 */

const getData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("data", id);
      resolve(id);
    }, 1000);
  });
};

const run = async () => {
  //await pauses only the current async function — not the whole program.
  await getData(1);
  await getData(2);
  await getData(3);
};

run();
