"use strict";
// Assignment Question # 28
// Stages of Life: Write an if-else chain that determines a person's stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13,  print the message that person is a kid.
// If the person is at least 13 years old but less than 20,  print the message that person is a teenager.
// If the person is at least 20 years old but less than 65,  print the message that person is a adult.
// If the person is age 65 or older,  print the message that person is an elder.
function stagesofLife(age) {
    if (age < 2) {
        console.log("person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("person is a adult");
    }
    else {
        console.log("person is a elder");
    }
}
stagesofLife(1);
stagesofLife(4);
stagesofLife(13);
stagesofLife(17);
stagesofLife(22);
stagesofLife(29);
stagesofLife(35);
stagesofLife(50);
stagesofLife(67);
