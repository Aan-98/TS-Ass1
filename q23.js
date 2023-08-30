"use strict";
// Assignment Question # 24
// More Conditional Tests: You don't have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one true and one false result for each of the following:
// # Tests for equality and inequality with strings.
let seazon = "winter";
console.log("Is seazon === winter ? I predict True.");
console.log(seazon === "winter");
console.log("Is seazon !== winter ? I predict False.");
console.log(seazon !== "winter");
// # Tests using the lower case function
let allcapsString = "WELCOME TO TORONTO";
let toLowerCase = allcapsString.toLowerCase();
console.log(`Is toLowerCase == "welcome to toronto"?, I guess it's true.`);
console.log(toLowerCase == "welcome to toronto");
// # Numerical tests involving equality and inequality, greater than and less than , greater than or equal to , and less than or equal to.
let num1 = 8;
let num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
let age = 8; // ternary operator
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);
// # Tests using and or operator
let fruitName = "Avacado";
let color = "Yellowgreen";
if (fruitName[0] === "A" && color[color.length - 1] === "n") {
    console.log("Fruit name starts with 'A' and color name end with 'n'");
}
else {
    console.log("Nothing to be printed");
}
// Or operator's example 
let fruitNam = "Avacado";
let colorz = "Yellowgreen";
if (fruitNam[0] === "A" || colorz[colorz.length - 2] === "n") {
    console.log("Fruit name starts with 'A' and color name end with 'n'");
}
else {
    console.log("Nothing to be printed");
}
// # test weather an item is in array.
const users = [
    { "userId": 1, "userName": "Tara" },
    { "userId": 2, "userName": "Zaliha" },
    { "userId": 3, "userName": "Hazel" },
    { "userId": 4, "userName": "Aslan" }
];
const checkIn = users.find((user) => user.userId === 4);
console.log(checkIn);
// # Test weather an item is not in an array.
const userz = [
    { "userId": 1, "userName": "Tara" },
    { "userId": 2, "userName": "Zaliha" },
    { "userId": 3, "userName": "Hazel" },
    { "userId": 4, "userName": "Aslan" }
];
const checkInn = userz.find((user) => user.userName === "Aan");
console.log(checkInn);
