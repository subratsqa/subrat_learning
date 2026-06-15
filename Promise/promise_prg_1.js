// let order = new Promise(function (resolve, reject) {
//     let foodready = true;
//     if (foodready) {
//         resolve("Pizza is delivered. Food is ready.");
//     } else {
//         reject("Ordered cancelled because of rain");

//     }
// })

// console.log(order);


let order = new Promise(function (resolve, reject) {
    let foodready = true;

    if (foodready) {
        resolve("Food is ready.");
    } else {
        reject("Heavy rain is going on.");
    }
});

order.then(function (order_status) {
    console.log(order_status);
}).catch(function (error) {
    console.log(error);
});