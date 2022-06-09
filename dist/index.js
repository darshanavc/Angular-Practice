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
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
const arr = [13, 23, 12, 45, 22, 48, 66, 100];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
const delArr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
for (let i = 0; i < delArr.length; i++) {
    delArr.splice(0, delArr.length);
    console.log(delArr);
}
let str = "";
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);
let str1 = "";
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
        str1 += j;
    }
    str1 += "\n";
}
console.log(str1);
let largeNumber = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let max = 0;
for (let i = 1; i <= largeNumber.length; i++) {
    if (largeNumber[i] > max) {
        max = largeNumber[i];
    }
}
console.log(max);
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
let str2 = "";
for (let i = 1; i <= 8; i++) {
    for (let j = 0; j < 8 - i; j++) {
        str2 += " ";
    }
    for (let k = 0; k < i; k++) {
        str2 += "*";
    }
    str1 += "\n";
}
console.log(str2);
