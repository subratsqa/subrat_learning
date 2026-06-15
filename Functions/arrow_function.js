const sname = (fname1, lname1) => (fname1 + ' ' + lname1);
console.log("rinku", "sahu");

const sum = (a, b) => (a + b);
console.log(sum(5, 6));

const double = n => n * 2;
console.log(double(5));


const getUser = () => ({
    name: "John",
    age: 25
});

console.log(getUser());

const emp_details = () => ({   //without parameter, if there is multiple line or long program we can use { }
    name: "subrat",
    dept: "QA"
})
console.log(emp_details());




const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);



const printOddNumbers = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
};

printOddNumbers(1, 20);



const validateStatusCode = status => {
    if (status >= 200 && status <= 300) {
        console.log("Correct request")
    } else {
        console.log("Invalid Request")
    }

}
validateStatusCode(200);
