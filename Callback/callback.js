// function greet(name, callback) {
//     console.log("Hello " + name);

//     callback();
// }

// function sayBye() {
//     console.log("Good Bye!");
// }

// greet("Subrat", sayBye);


// function message(nm, callback) {
//     console.log("Hi" + nm);

//     callback();

// }
// function callBye() {
//     console.log("Bye bye...");

// }

// message("Sahu", callBye);


// function my_addrs(state, callback) {
//     console.log("State is", state);
//     callback();
// }

// function my_statecity() {
//     console.log("Here is state and city");

// }

// my_addrs("Odisha", my_statecity);


function grt() {
    console.log("hey, i am here");

}

function saygrt(name, callback) {
    console.log("Hello, come here");
    callback()
}

saygrt("Subrat", grt);


function sum(a = 5, b = 6) {
    let c = a + b;
    console.log(c);
}

function output(callback) {
    console.log("What is the output");
    callback();
}

output(sum);
