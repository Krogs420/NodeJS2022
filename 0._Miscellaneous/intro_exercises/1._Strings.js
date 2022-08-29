// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

//Using parseFloat takes the one string and makes it a float
const parseOne = parseFloat(numberOne)
const parseTwo = parseFloat(numberTwo)
const result = parseOne + parseTwo

//toFixed is a way to display more decimals in a number
console.log(result.toFixed(2))

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const conv1= Number(anotherNumberOne);
const conv2 = Number(anotherNumberTwo);
const ex2Result = conv1 + conv2;


console.log(ex2Result.toFixed(2))

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const sum = one + two + three
const average = sum / 3

console.log(average.toFixed(5))

// Show in the console the avg. with 5 decimals





// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const index = letters[2]
console.log(index)


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("j", "J"))

// --------------------------------------