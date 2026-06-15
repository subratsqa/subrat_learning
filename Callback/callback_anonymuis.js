/*A callback function using an anonymous function means you pass a function without 
 a name as an argument to another function.*/

function placeOrder(ClipboardItem, callback) {
    console.log("hi, your order is placed");
    console.log("Value of ClipboardItem:", ClipboardItem);
    callback();

}

//call back by normal function calling 
function myOrder() {
    console.log("I have ordred Burger");

}

placeOrder("Burger", myOrder);


//callback called by anonymous function

placeOrder("Egg roll", function () {
    console.log("I have ordered Egg roll");
})


//callback by Arrow function

placeOrder("Momos", () => {
    console.log("I have ordered Momos");

})








// function birthDay(day, callback) {
//     console.log("hello, your birthday is coming");
//     callback();

// }

// birthDay("15th June", function () {
//     console.log("Let's celebrate");
// })
