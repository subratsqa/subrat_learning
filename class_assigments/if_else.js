let num = 7;
if (num % 2 === 0) {
    console.log("Number is even number")
} else {
    console.log("Number is odd number")
}


let mark = 82;
if (mark >= 90) {
    console.log("A grade");
}
else if (mark >= 80) {
    console.log("B grade")
}
else if (mark >= 70) {
    console.log("C grade")
}
else if (mark >= 60) {
    console.log("D grade")
}
else {
    console.log("Fail")
}


let year = 2001;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}



let isRaining = true;

if (isRaining) {
    console.log("Take umbrella");
} else {
    console.log("Go normally");
}

let isMetroRun = false;

if (isMetroRun) {
    console.log("Go with metro");
} else {
    console.log("Go by car");
}