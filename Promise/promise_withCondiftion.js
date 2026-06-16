let myApiTest = new Promise(function (resolve, reject) {

    let apiCall = false;
    if (apiCall) {
        resolve({ "status": "done" });
    } else {
        reject("Invalid status code");
    }
});

// myApiTest.then(function (pass) {
//     console.log(pass);

// }).catch(function (fail) {
//     console.log(fail);

// }).finally(function () {
//     console.log("Test completed");

// });

myApiTest()
    .then(function (pass) {
        console.log(pass);

    }).catch(function (fail) {
        console.log(fail);

    }).finally(function () {
        console.log("Test completed");

    });