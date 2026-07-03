// QUESTION#1

// var inputChar = prompt("Enter any number or letter(uppercase or lowercase):");

// var code = inputChar.charCodeAt(0);
// if (code >= 48 && code <= 57) {
//     alert("The given input is a Number.");
// }

// if (code >= 65 && code <= 90) {
//     alert("The given input is an Uppercase letter.");
// }

// if (code >= 97 && code <= 122) {
//     alert("The given input is a Lowercase letter.");
// }

// QUESTION#2

// var num1 = Number(prompt("ENTER 1 NUMBER:"));
// var num2 = Number(prompt("ENTER 2 NUMBER:"));

// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// }
// if (num2 > num1) {
//     alert("The larger number is: " + num2);
// }

// if (num1 === num2) {
//     alert("Both numbers are equal.");
// }

// // QUESTION#3

// var myNumber = Number(prompt("ENTER ANY NUMBER:"));

// if (myNumber > 0) {
//     alert("The number is positive.");
// }


// if (myNumber < 0) {
//     alert("The number is negative.");
// }

// if (myNumber === 0) {
//     alert("The number is zero.");
// }

// QUESTION#4

// var character = prompt("Enter any letter:");

// var lowChar = character.toLowerCase();

// var isVowel = false;

// if (lowChar === "a") {
//     isVowel = true;
// }
// if (lowChar === "e") {
//     isVowel = true;
// }
// if (lowChar === "i") {
//     isVowel = true;
// }
// if (lowChar === "o") {
//     isVowel = true;
// }
// if (lowChar === "u") {
//     isVowel = true;
// }

// alert(isVowel);

// QUESTION#5

// var passWord = ("alluharjagahfithojatahai");
// var ask = prompt("ENTER PASSWORD");

// if (userPassword === "" || userPassword === null) {
//     alert("Please enter your password");
// }

// if (userPassword !== "" && userPassword !== null && userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }

// if (userPassword !== "" && userPassword !== null && userPassword !== correctPassword) {
//     alert("Incorrect password");
// }

// QUESTION#6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// QUESTION#7

var time = Number(prompt(" enter time according to 24-hour format (e.g., 0800, 1300, 1900):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
}
if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}

if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}

if (time >= 2100 && time <= 2400) {
    alert("Good night!");
}