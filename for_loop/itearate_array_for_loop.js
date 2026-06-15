let arr = [98, 34, 45, 23, 87];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(`${arr[i]} is Even number`);
    } else {
        console.log(`${arr[i]} is the Odd number`);
    }
}

// for...of
let arr1 = [34, 87, 98, 54];
for (let num of arr1) {
    console.log(num);
}

let text = "Hello";

for (let ch of text) {
    console.log(ch);
}

