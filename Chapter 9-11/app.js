// QUESTION#1

// var city = prompt("ENTER YOUR CITY NAME");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("You are not allow");
// }

// Question#2

// var gender = prompt("Please ! Enter your gender");
// if (gender === "Male") {
//     alert("Good Morning! Sir ");
// } if (gender === "Female") {
//     alert("Good Morning! Ma'am");
// }

// QUESTION#3

// var trafficLight = prompt("ENTER YOUR TRAFFIC LIGHT COLOR");
// if (trafficLight === "Red") {
//     alert("Must stop")
// }if (trafficLight === "Yellow") {
//     alert("Ready to move");
// }if (trafficLight === "Green") {
//     alert("Move now");
// }

// QUESTION#4

// var fuel = +prompt("Enter your fuel figure (in litres)");
// if (fuel<"0.25") {
//      alert("Please refill the fuel in your car");
// } else {
//     alert("You don't have to refill the fuel");
// }

// QUESTION#5
// a.

// var num = prompt("ENTER NUMBER");
// var a = 4;
// if (++a===5) {
//     alert("given condition for variable a is true");
// }

// // b.

// var num1 = prompt("Enter number");
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true")
// }

// c.

// var condition1 = prompt ("Enter number");
// var c = 12
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c<14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d.

// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = (materialCost + laborCost);
// if (totalCost === materialCost + laborCost) {
//     alert("The cost equals");
// }

// // e.

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f.

// if ("car"<"cat") {
//     alert("car is smaller than cat");
// }

// QUESTION#6

// var sub1 = +prompt("Enter marks of English:");
// var sub2 = +prompt("Enter marks of Math:");
// var sub3 = +prompt("Enter marks of Urdu:");
// var totalMarks = +prompt("Enter total marks :");
// var marksObtained = sub1 + sub2 + sub3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade = "";
// var remarks = "";
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total marks : " + totalMarks + "</p>");
// document.write("<p>Marks obtained : " + marksObtained + "</p>");
// document.write("<p>Percentage : " + percentage.toFixed(0) + "%</p>");
// document.write("<p>Grade : " + grade + "</p>");
// document.write("<p>Remarks : " + remarks + "</p>");

// // QUESTION#7

// var secretNumber = 6; 
// var userGuess = Number(prompt("Guess the number between 1 to 10:"));


// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// }

// if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }

// if (userGuess !== secretNumber && userGuess + 1 !== secretNumber) {
//     alert("Wrong guess! Try again.");
// }

// // QUESTION#8

// var userNumber = Number(prompt("ENTER ANY NUMBER:"));
// if (userNumber % 3 === 0) {
//     alert("The number is divisible by 3.");
// }

// if (userNumber % 3 !== 0) {
//     alert("The number is NOT divisible by 3.");
// }

// QUESTION#9

// var userNumber = Number(prompt("ENTER ANY NUMBER:"));


// if (userNumber % 2 === 0) {
//     alert("The given input is an even number.");
// }

// if (userNumber % 2 !== 0) {
//     alert("The given input is an odd number.");
// }

// // QUESTION#10

// var T = Number(prompt("Enter the temprature :"));

// if (T > 40) {
//     alert("It is too hot outside.");
// }

// if (T > 30 && T <= 40) {
//     alert("The Weather today is Normal.");
// }

// if (T > 20 && T <= 30) {
//     alert("Today’s Weather is cool.");
// }

// if (T > 10 && T <= 20) {
//     alert("OMG! Today’s weather is so Cool.");
// }

// QUESTION#11

var firstNum = Number(prompt("Type first number:"));
var secondNum = Number(prompt("Type second number:"));
var operation = prompt("Type Operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNum + secondNum;
    alert("Result: " + result);
}

if (operation === "-") {
    result = firstNum - secondNum;
    alert("Result: " + result);
}

if (operation === "*") {
    result = firstNum * secondNum;
    alert("Result: " + result);
}

if (operation === "/") {
    result = firstNum / secondNum;
    alert("Result: " + result);
}

if (operation === "%") {
    result = firstNum % secondNum;
    alert("Result: " + result);
}