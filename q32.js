"use strict";
//Assignment Question # 33
// Ordinal Numbers: Ordinal Numbers indicate their position in an array, such as 1st or 2nd. Most ordinal numbers end in 'th' , except 1,2, and 3.
// Store the numbers 1 to 9 in an array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th ", and each result should be on a separate line.
const q33 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of q33) {
    let ordinalSuffix;
    if (num === 1) {
        ordinalSuffix = "st";
    }
    else if (num === 2) {
        ordinalSuffix = "nd";
    }
    else if (num === 3) {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = "th";
    }
    console.log(`${num}${ordinalSuffix}`);
}
// it can be done with switch method too.
