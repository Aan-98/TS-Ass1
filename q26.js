"use strict";
// Assignment Question # 27
// Alien Colors # 3: Turn your if-else chain from last exercise into an if else chain.
//# if alien is green print a message that player earned 5 points.
// # If the alien is yellow , print the message the player earned 10 points.
// # If the alien is red, print a message that player earned 15 points.
// # Write three versions of this program, make sure each message is printed for appropriate color alien.
function alienFunction(alienColor) {
    if (alienColor === "green") {
        console.log("Player earned 5 points");
    }
    else if (alienColor === "yellow") {
        console.log("Player earned 10 points");
    }
    else if (alienColor === "red") {
        console.log("Player earned 15 points");
    }
    else {
        console.log("no points");
    }
}
alienFunction('green');
alienFunction('yellow');
alienFunction('red');
alienFunction('orange');
// Version#2 of program
function alienFunction2(alienColor) {
    switch (alienColor) {
        case 'green':
            console.log("player earned 5 points.");
            break;
        case 'yellow':
            console.log("player earned 10 points.");
            break;
        case 'red':
            console.log("player earned 15 points.");
            break;
        default:
            console.log("no points earned...!!");
    }
}
alienFunction2('green');
alienFunction2('yellow');
alienFunction2('red');
alienFunction2('orange');
