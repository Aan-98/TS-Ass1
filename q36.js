"use strict";
//Assignment Question # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = "L", message = "I love TypeScript") {
    console.log(`providing you ${size} size , ${message}`);
}
make_shirt1();
make_shirt1("M", "Designed By Us Wore By You!");
make_shirt1("S", "Be Your Own Muse!");
