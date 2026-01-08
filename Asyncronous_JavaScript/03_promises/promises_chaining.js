// What is Promise Chaining ?
// Ans: Using multiple .then() calls in sequence,
// where each .then() receives the result of the previous one.

const getNumber = (num) => {
    // Function returning a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
};

// Right method of promise chaining
getNumber(1) // --> This starts a 1-second timer and returns a promise

  // First .then() — runs ONLY after the first promise resolves (after 1 second)
  .then((result) => {
    console.log(result);              // --> Prints: 1 (after ~1 second)
    return getNumber(result + 1);      // --> Calls getNumber(2) --> starts another 1-second timer
                                      // --> Returns that new promise so the chain waits for it
  })

  // Second .then() — runs ONLY after the promise from above resolves (after another 1 second)
  .then((result) => {
    console.log(result);              // --> Prints: 2 (total ~2 seconds from start)
    return getNumber(result + 1);      // --> Calls getNumber(3) --> starts another 1-second timer
                                      // --> Returns the promise to keep the chain waiting
  })

  // Third .then() — runs after the previous promise resolves
  .then((result) => {
    console.log(result);              // --> Prints: 3 (total ~3 seconds)
    return getNumber(result + 1);      // --> Calls getNumber(4) --> starts one more timer
                                      // --> Returns the promise so the next .then() waits
  })

  // Fourth .then() — runs after the last returned promise resolves
  .then((result) => {
    console.log(result);              // --> Prints: 4 (total ~4 seconds)
    // No return needed here because there's no next .then()
  });

//O/P(right code of promise chaining)
// 1   promises_chaining.js:18 
// 2   promises_chaining.js:25
// 3   promises_chaining.js:32 
// 4   promises_chaining.js:39 


/*`````````````````````````````````````````````````````````````````````````````*/
// Chain WITHOUT returning the promises(Wrong Method)
/*getNumber(1)
  .then((result) => {
    console.log(result); // --> Prints 1 (after 1 second)

    // We CALL getNumber(2), so it starts its 1-second timer...
    getNumber(result + 1); // <-- NO 'return' here!

    // But because there's no 'return', this .then() finishes IMMEDIATELY
    // It implicitly returns 'undefined' to the next .then()
  })
  .then((result) => {
    console.log(result); // --> Prints 'undefined' (almost immediately!)

    // Same problem again:
    getNumber(result + 1); // <-- Calls getNumber(NaN or undefined+1), but no return
  })
  .then((result) => {
    console.log(result); // --> Prints 'undefined' (almost immediately!)
  });
*/


// O/p (for the above wrong method)
// 1
// promises_chaining.js:40 undefined
// promises_chaining.js:46 undefined
