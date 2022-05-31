"use strict";
function math(opp, a, b) {
    if (opp == "add") {
        return a + b;
    }
    else if (opp == "minus") {
        return a - b;
    }
    else if (opp == "mul") {
        return a * b;
    }
    else if (opp == "div") {
        return a / b;
    }
    else {
        console.log("Error");
    }
}
console.log(math("div", 4, 5));
