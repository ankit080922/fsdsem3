const promise1 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve({ username: "Ankit" });
  } else {
    reject("Promise rejected!");
  }
});

console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve({ username: "age = 25" });
  } else {
    reject("Promise rejected!");
  }
});

console.log(promise2);

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

promise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise was rejected:", error);
  });*/
