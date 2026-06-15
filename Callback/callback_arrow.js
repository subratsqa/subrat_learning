function placeOrder(ClipboardItem, callback) {
    console.log("hi, your order is placed");
    console.log("Value of ClipboardItem:", ClipboardItem);
    callback();

}

placeOrder("Momos", () => {
    console.log("I have ordered Momos");

})