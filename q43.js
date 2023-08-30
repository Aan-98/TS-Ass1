"use strict";
//Assignment Question # 44
// Sandwiches: Write a function that accepts an array of items a person wants in a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function Sandwiches(...items) {
    if (items.length === 0) {
        console.log("Order your favorite one");
    }
    else {
        console.log("You can tell us your favorite ingredients too, to try something new : " + items.join(" , "));
    }
}
Sandwiches("bread slices", "green olives", "brown mustard", "butter lettuce", "tomatoes");
Sandwiches("bread slices", "black olives", "turkey lettuce", "ham", "cheese");
Sandwiches("bread slices", "green olives", "brown mustard", "chicken", "pickles", "avacado");
