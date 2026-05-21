// let a = 6
// let b = (a++ + ++a);
// console.log(b); //(6 + 8)

// let a1 = 8;
// let b1 = (++a1 + a1++ + a1++);
// console.log(b1); //(9 + 9 + 10)

// let a2 = 8;
// let b2 = (++a2 + a2++ + ++a2);
// console.log(b2); //(9 + 9 + 11)

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);