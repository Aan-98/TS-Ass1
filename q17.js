"use strict";
//Assignment Question # 18
// Seeing the world: Think of at least five places in the world you'd like to visit.
// # Store the locations in a array. Make sure the array is not in alphabetical order .
let q18 = ["Greece", "Galapagos Islands", "Istanbul", "Milan", "Amsterdam"];
// # Print your arary in it's original order.
console.log(`original :`, q18);
// # Print your array in alphabetical order without modifying the actual list.
let Newq18 = [...q18].sort();
console.log(`Sorted`, Newq18);
// # Show that your array is still in it's original order by printing it .
console.log(`original unmodified`, q18);
// # Print your array in reverse alphabetical order without changing the order of the original list.
let q18Reversed = [...q18].reverse();
console.log(`Reversed Array`, q18Reversed);
// # Show that your array is still in it's original order by printing it again.
console.log(`original Unmodified`, q18);
// # Reverse the order of your list , print the array to show that it's order has changed.
let q18Rev = q18.reverse();
console.log(`Reversed modified :`, q18Rev);
// # Reverse the order of your list again. Print the list to show it's back to it's original order.
let q18Rev_again = q18.reverse();
console.log(`Reversed again modified : `, q18Rev_again);
// # Sort your array so it's stored in alphabetical order. Print the array to show that it's order has been changed.
let q18_alpha = q18.sort();
console.log(`Sorted (modified) :`, q18_alpha);
// # Sort to change your array so it's sorted in reverse alphabetical order. Print the list to show that it's order 
//has changed.
let q18_Rev = q18.reverse();
console.log(`Alphabetically Rev(modified):`, q18_Rev);
