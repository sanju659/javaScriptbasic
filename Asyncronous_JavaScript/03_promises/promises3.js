//.then() runs when a Promise is fulfilled and receives 
// the resolved value, while .catch() runs when a Promise 
// is rejected or when an error occurs in any previous .then() in the chain.
const p = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Done ");
    } else {
      reject("Failed ");
    }
  }, 1000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
