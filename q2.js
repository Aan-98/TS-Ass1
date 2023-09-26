"use strict";
// Assignment Question#3
// Name Cases: Store a person's name in lowercase, uppercase and titlecase. 
let prsnName = "Amar Elahi";
console.log(prsnName.toLowerCase());
// for UpperCase
console.log(prsnName.toUpperCase());
// for TitleCase 
function toTitleCase(pName) {
    let person_name = pName.split(' ');
    let nameMaped = person_name.map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    let titleCased = nameMaped.join(' ');
    return titleCased;
}
;
let randon_name = "amar  eLAHI";
let nametitleCased = toTitleCase(randon_name);
console.log(nametitleCased);
