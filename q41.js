"use strict";
//Assignment Question # 42
// Great Magicians: Start with a copy of your program from exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician's name. Call show_magicians() to see that the list has actually been modified..
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
// Array of magician's names
const magicianNames = ["Magician1", "magician2", "magician3", "magician4"];
// Call make_great() to modify magician names
const greatMagicianNames = make_great(magicianNames);
// Display the modified magician names
show_magicians1(greatMagicianNames);
