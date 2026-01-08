const sum = (a, b) => {
  console.log(a + b);
};

const calculator = (a, b, sumCallback) => {
  console.log("Calculating...");

  setTimeout(() => {
    sumCallback(a, b);
  }, 2000);
};

calculator(7, 6, sum);
