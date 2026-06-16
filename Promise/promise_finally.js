let mtTest = new Promise(function (resolve, reject) {

    reject("Test case failed")
});

mtTest.then(function (result) {
    console.log(result);

}).catch(function (error) {
    console.log(error);

}).finally(function () {
    console.log("Test completed");

});