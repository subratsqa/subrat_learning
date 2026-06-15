const student = {
    name: "Alice",
    address: {
        city: "London",
        zip: 342223
    }
};
console.log(student); //name: 'Alice', address: { city: 'London', zip: 342223 }
console.log(student.address); //city: 'London', zip: 342223
console.log(student.address.city); //London



const car = {
    model: "KIA",
    car_details: {
        year: 2018,
        colour: "Red",
        variant: "IMT"

    }
};
console.log(car);
console.log(car.car_details.variant);

console.log(Object.keys(car.car_details)); //print all the keys
console.log(Object.values(car.car_details)); //print all the values


