let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

let result = fruits.slice(1, 4); //start from 1 index and print upto (given index -1) //[ 'Banana', 'Mango', 'Orange' ]

console.log(result);

console.log(fruits.slice(2, 7)); //[ 'Mango', 'Orange' ]

console.log(fruits.slice(1)); //print all the element after 1 index


console.log(fruits.slice(-1)); //print last element of the array


console.log(fruits.slice(-3)); //print all the element after -3 index


console.log(fruits.slice(-3, 3)); //element start from -3 index and go upto 2 index





//Remove First Element Without Changing Original 
let new_fruits = fruits.slice(1);
console.log(new_fruits);


//Quick Summary
arr.fruits(1, 4);   // Elements from index 1 to 3
arr.fruits(2);      // From index 2 to end
arr.fruits();       // Copy entire array
arr.fruits(-1);     // Last element
arr.fruits(-2);     // Last two elements
