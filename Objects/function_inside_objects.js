const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }


};
let name = person.fullname();
console.log(name);
console.log(person.firstName);


const addValue = {
    a: 5,
    b: 10,
    sum: function () {
        return this.a + this.b;
    }
};
let value = addValue.sum();
console.log(value);


const mulValue = {
    i: 25,
    j: 20,
    multiply: function () {
        console.log(this.i * this.j);
    }
};
mulValue.multiply();




