// asynchronously

// Promise is a constructor function, so you need to use the new keyword to create one

// It takes a function, as its argument, with two parameters - resolve and reject

// A promise has three states: pending, fulfilled, and rejected

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");

        makeServerRequest.then(result => {
            console.log(result);
        });

    } else {
        reject("Data not received");

        makeServerRequest.catch(error => {
            console.log(error);
        });

    }
});

// Promises are most useful when you have a process that takes an unknown amount of time (asynchronous), a server request