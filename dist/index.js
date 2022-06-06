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
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
