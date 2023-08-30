"use strict";
// Assignment Question # 29
// Favorite Fruit: Make an array of your favorite fruits ,  and then write a series of independent if statements that checks for certain fruits in your array. 
// Make an array of your three favorite fruits and call it as favorite_fruits.
// Write 5 if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, then if block should print a statement, such as you really like bananas!
const favorite_fruits = ["Bananas", "Kiwi", "Cherries"];
if (favorite_fruits.includes("Bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("You really like kiwi!");
}
if (favorite_fruits.includes("Cherries")) {
    console.log("You really like Cherries!");
}
if (favorite_fruits.includes("Avacado")) {
    console.log("You really like Avacados!");
}
if (favorite_fruits.includes("Apples")) {
    console.log("You really like Apples!");
}
