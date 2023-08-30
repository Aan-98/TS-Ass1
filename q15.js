"use strict";
//Assignment Question # 16
// More Guest: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
// Start with your program from exercise 15. Add a print statement to the end of your program informing people that you found a bigger table.
// Add a new guest to the beginning of your array.
// Add one new guest to the middle of your array .Use append() to add one new guest to the end of your list. Print a new set of invitation messages , one for each in your list.
const q16 = ["Fatima", "Qandeel", "Alina", "Hafsa", "Iqra", "Eman"];
q16.unshift("Rida");
q16.splice(4, 0, "Tara");
q16.push("Javeria");
console.log(q16);
for (let i = 0; i < q16.length; i++) {
    console.log(`Salam ${q16[i]} I just wanna inform you that i got a larger dining table so you gotta meet a chunk of more friends too on that day, keeping venue and schedule same.`);
}
