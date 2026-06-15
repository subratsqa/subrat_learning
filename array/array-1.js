let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[0]); //item using index
fruits[3] = "grapes"; //grapes added in the array in 3rd index
console.log(fruits);

console.log(fruits.length); //total item of a Array



console.log(fruits.indexOf("banana")); //display the index of banana

fruits.pop(); //remove the last element of the array
console.log(fruits);

fruits.push("mango"); //add item in the last index of the array
console.log(fruits);

fruits.shift(); //remove the 1st element of the array
console.log(fruits);

fruits.unshift("grapes"); //add element in the 0 index of array
console.log(fruits);

let car_model = new Array("seltos", "sonet", "seltos", "carens"); //Using Array constructor
console.log(car_model)

let index = car_model.indexOf("sonet"); //index of "sonet" -->1
console.log(index);

let last_index = car_model.lastIndexOf("seltos"); //if there are multiple same item..print last item's index -->2
console.log(last_index);

console.log(car_model.includes("seltos")) //it will print boolean value true/false

let result = car_model.find(car_model => car_model === "sonet"); //it will search a particular item based on the conditions
console.log(result);

numbers = [32, 54, 11, 56, 34, 9];
let find_num = numbers.find(numbers => numbers > 3); // it will print only one condition satisfied element                                                  
console.log(find_num);

let find_all_num = numbers.filter(numbers => numbers > 50); // it will print all the condition satisfied element 
console.log(find_all_num);


let new_arry = [23, 56, 98, 12, 21, 2];
let elem = new_arry.includes(98); //check element is present or not
console.log(elem);

let elem1 = new_arry.findIndex(x => x > 78); //it will print index of greater than provided value (index of 98)
console.log(elem1);

let elem2 = new_arry.findLast(c => c > 10); //it will print greater than provides value but last greater value of the array
console.log(elem2);


let elem3 = new_arry.findLastIndex(d => d > 25); //it will print last index of greater than provided value (index of 56)
console.log(elem3);


