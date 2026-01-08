// What is Callback Hell ?
// Ans: Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
// This style of programmig becomes difficult to understand & manage

const getData = (dataId, getNextData) => {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
};

// Callback Hell
getData(1, () => {
  console.log("Getting Data 2");
  getData(2, () => {
    console.log("Getting Data 3");
    getData(3, () => {
      console.log("Getting Data 4");
      getData(4);
    });
  });
});
