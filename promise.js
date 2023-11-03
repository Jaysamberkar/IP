const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(
        `Success! Operation completed. the random number is ${randomNumber}`
      );
    } else {
      reject(
        `Error! Something went wrong! the random number is ${randomNumber}`
      );
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
