const getData = (id) => {
  return new Promise((resolve, reject) => {
    if (id === 1 || id === 3 || id === 5) {
      setTimeout(() => {
        console.log("data", id);
        resolve(id);
      }, 1000);
    } else {
      reject("an error occured");
    }
  });
};

const run = async () => {
  try {
    await getData(1); //works
    // await getData(2); //  fails here and execution goes to catch block
    await getData(3); //works
    await getData(5); //works
  } catch (err) {
    console.error("Caught:", err);
  }
};

run();
