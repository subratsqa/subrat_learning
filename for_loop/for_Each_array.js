let num = [12, 37, 32, 97, 52];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2) {
        console.log(num[i]);
    }
}

//for...of
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

let cars = ["BMW", "KIA", "TATA"];
for (my_car of cars) {
    console.log(my_car);
}

//for each

let colour = ["green", "yellow", "red"];
colour.forEach(function (my_col) {
    console.log(`Element of the color array :${my_col}`);
});

let building = ["Rossa", "Kiah", "Bonita"];
building.forEach(function (my_building) {
    console.log(`Element of the building array :${my_building}`)

}
);





