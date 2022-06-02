"use strict";
function addition(a, b) {
    return a + b;
}
console.log("addition :", addition(2, 4));
function subtraction(a, b) {
    return a - b;
}
console.log("subtraction :", subtraction(12, 4));
function multiplication(a, b) {
    return a * b;
}
console.log("multiplication :", multiplication(12, 3));
function division(a, b) {
    return a / b;
}
console.log("division  :", division(20, 5));
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
const arr1 = [1, 2, 3, 4, 5, 6];
let temp = "";
for (let i = 0; i < arr1.length; i++) {
    temp += arr1[i] + " ";
}
console.log(temp);
function myFunction() {
    let text;
    let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
    switch (favDrink) {
        case "Coca-Cola":
            text = "Excellent choice. Coca-Cola is good for your soul.";
            break;
        case "Pepsi":
            text = "Pepsi is my favorite too!";
            break;
        case "Sprite":
            text = "Really? Are you sure the Sprite is your favorite?";
            break;
        default:
            text = "I have never heard of that one..";
    }
    console.log(text);
}
myFunction();
