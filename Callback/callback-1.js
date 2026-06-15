function myDisplayer() {
    console.log("I am using Orpat calculator");

}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    console.log(sum);

    callback();
}

myCalculator(5, 6, myDisplayer);