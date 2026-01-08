// 1. What is Call Back function
// Ans: A callback is just a function that,
// is passed as an argument to another function and then called (executed) inside it
const sum = (a, b) => {
  console.log(a + b);
};

const calculator = (a, b, sumCallback) => {
  sumCallback(a, b);
};

calculator(7, 6, sum);
