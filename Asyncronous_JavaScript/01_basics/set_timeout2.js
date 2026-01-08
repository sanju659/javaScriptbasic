console.log("one");
console.log("two");

//schedules the callback to run after 3 seconds, but doesn't block execution
setTimeout(() => {
  console.log("Hello");
}, 3000); // 3000 milisec = 3 sec

console.log("three");
console.log("four");


// O/P
// ---------
// one
// two
// three
// four
// Hello