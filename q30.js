"use strict";
// Assignment Question # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message we need to find some users!
// Remove all of the usersname from your array, and make sure the correct message is printed.
const userq31 = [];
if (userq31.length === 0) {
    console.log("we need to find some users");
}
else {
    userq31.splice(0, userq31.length);
    console.log("no users");
}
