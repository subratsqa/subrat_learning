let num = Promise.resolve(10);

num.then(function (val) {
    return val * 8;
}).then(function (val) {
    console.log(("Result:", val));

});