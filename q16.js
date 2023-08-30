"use strict";
//Assignment Question # 17
//Shrinking guest list: You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guests:
// # Start your program from exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// # Remove guests from your list one at a time until only two names remain in your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
// # Remove the last two names from your list, so you have an empty list at the end of your program.
const q17 = ["Fatima", "Qandeel", "Alina", "Hafsa", "Iqra", "Eman"];
for (let guest of q17) {
    console.log(`Sorry ${guest}, I came to know that my new dining table is not going to receive before our planned get together. So, I have shortage of space, that's why going to invite only two persons this time`);
}
let poppedGuest1 = q17.pop();
console.log(`Sorry ${poppedGuest1} we are unable to meet this time, will plan lunch some other day`);
let poppedGuest2 = q17.pop();
console.log(`Sorry ${poppedGuest2} we are unable to meet this time, will plan lunch some other day`);
let poppedGuest3 = q17.pop();
console.log(`Sorry ${poppedGuest3} we are unable to meet this time, will plan lunch some other day`);
let poppedGuest4 = q17.pop();
console.log(`Sorry ${poppedGuest4} we are unable to meet this time, will plan lunch some other day`);
let allPopped = q17.splice(-2, 2);
console.log(allPopped);
console.log(q17);
