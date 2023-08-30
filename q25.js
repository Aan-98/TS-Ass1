"use strict";
// Assignment Question # 26
// Alien color # 2:Choose a color for an alien as you did in previous question, and write an if-else chain
// If alien's color is green print a statement that the player just earned 5 points.
// If alien's color isn't green print a statement that the player just earned 10 points.
// write one version of this program that runs the if block and another that runs else blocks.
const alien_colorr = "green";
if (alien_colorr === "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
// version 2 (for running else block)
const alien_clor = "red";
if (alien_clor === "green") {
    console.log("Player just earned 5 points");
}
else {
    console.log("Player just earned 10 points");
}
