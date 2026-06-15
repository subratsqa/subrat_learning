function sum() {
    let a = 5;
    let b = 6;
    let result = a + b;
    console.log("Sum of 2 number is:", result);

}

function division(i, j) {
    let div_result = i - j;
    console.log("Division of 2 number is:", div_result);
}

setTimeout(sum, 3000);
division(10, 2);