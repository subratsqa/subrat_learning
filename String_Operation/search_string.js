let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);

let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("locate");
console.log(index1); //Both indexOf(), and lastIndexOf() return -1 if the text is not found:

//indexof : print the index of 1st letter; lastIndexof: print the last search word 1st index


let message = 'Hello subrat, how r u?, whats up subrat?';
let index2 = message.indexOf('subrat', 15); //here search start index is 15, so it will ignore 1st subrat
console.log(index2);

let text5 = "Please locate where 'locate' occurs!";
let my_string = text5.search("locate");
console.log(my_string)

/*The two methods are NOT equal. These are the differences:

    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).*/
