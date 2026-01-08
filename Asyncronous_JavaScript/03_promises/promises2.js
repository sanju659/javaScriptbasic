function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");

    setTimeout(() => {
      if (userId === 1) {
        resolve({
          id: 1,
          name: "Arjun",
          role: "Developer"
        });
      } else {
        reject("User not found");
      }
    }, 3000);
  });
}


const promise = fetchUserData(1);
// const promise = fetchUserData(1);// Error: promises2.js:13 Uncaught (in promise) User not found
console.log(promise);
