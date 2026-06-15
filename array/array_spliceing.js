//JavaScript Array splice() Method
//The splice() method is used to add, remove, or replace elements in an array.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2); //will remove 1 and 2 index
console.log(fruits);

let fruits_1 = ["Apple", "Banana", "Mango", "Orange"];
fruits_1.splice(1, 3); //will remove 1 to 3 index
console.log(fruits_1);

let fruits_2 = ["Apple", "Banana", "Mango", "Orange"];
fruits_2.splice(-1); //will remove last element using -1 index
console.log(fruits_2);


let fruits_3 = ["Apple", "Mango"];
fruits_3.splice(1, 0, "Banana"); //add element in 1st index, 0 means without deleting any element 
console.log(fruits_3); //[ 'Apple', 'Banana', 'Mango' ]

let fruits_4 = ["Apple", "Mango", "Grapes", "Papaya"];
fruits_4.splice(2, 1, "Banana"); //add element in 1st index, 1 means deleting one any element //it is just like replace an element 
console.log(fruits_4); //[ 'Apple', 'Mango', 'Banana', 'Papaya' ]

let fruits_5 = ["Apple", "Mango", "Grapes", "Papaya"];
fruits_5.splice(1, 2, "Banana"); //delete 2 elements start from 1st index upto 2nd index, add Banana in 1st index
console.log(fruits_5); //[ 'Apple', 'Banana', 'Papaya' ]


let fruits_6 = ["Apple", "Mango", "Orange"];
fruits_6.splice(1, 1, "Banana"); //add element in 1st index, replace Banana with Mango
console.log(fruits_6); //[ 'Apple', 'Banana', 'Orange' ]



let numbers = [1, 5];
numbers.splice(1, 0, 2, 3, 4); //start from 1st index, 0 means no delete, start from 1st index and add 2,3,4
console.log(numbers); //[ 1, 2, 3, 4, 5 ]


let fruit7 = ["Apple", "Banana", "Mango"];

let removed = fruit7.splice(1, 1);

console.log(removed); //it will print only remove element //Banana
console.log(fruit7); //print after remove // Apple. Mango