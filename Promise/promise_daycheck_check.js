let day = new Promise(function (resolve, reject) {
    let sunday = true;

    if (sunday) {
        resolve("Today is holiday");
    } else {
        reject("Need to go office")
    }
});

day.then(function (holiday) {
    console.log(holiday);

}).catch(function (NoHoliday) {
    console.log(NoHoliday);

});