let num = [34, 87, 45, 91, 12, 49];
num.sort((a, b) => a - b); //sort in asendening order
console.log("Array in assending order:", num);

num.sort((a, b) => b - a);
console.log("Array in decendening order:", num);

let student = [
    { name: "subrat", age: 35 },
    { name: "satya", age: 32 },
    { name: "anusha", age: 34 },
    { name: "ram", age: 30 }

];
student.sort((a, b) => a.age - b.age);
console.log("List of student age in asending order:", student);

let employee = [
    { name: "ram", salary: 25000 },
    { name: "ram", salary: 32000 },
    { name: "ram", salary: 29000 },
    { name: "ram", salary: 42000 }

]
employee.sort((a, b) => a.salary - b.salary);
console.log("List of emplyees salary in asending order:", employee);

