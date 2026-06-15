const sum = function (a, b) {   //function as argument means we are assigning a function to a varibale
    return (a + b);
}
console.log(sum(5, 6));




const my_name = function (name) {
    return `Hello, ${name}`;

}
console.log(my_name("Subrat"));


let i = 12;
let j = 4;

const multiply = function (i, j) {
    return i * j;

}
console.log(`Multiply value of ${i} and ${j} is ${multiply(i, j)}`);


const fullname = function (fname, lname) {
    return fname + ' ' + lname;
}
console.log("Fullname of the candidate is:", fullname("subrat", "sahu"));

const sname = (fname1, lname1) => (fname1 + ' ' + lname1);
console.log("rinku", "sahu");