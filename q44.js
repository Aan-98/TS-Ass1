"use strict";
//Assignment Question # 45
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You didn't choose any items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items: " + items.join(", "));
    }
}
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Chicken", "Bacon", "Avocado", "Mustard", "Pickles");
