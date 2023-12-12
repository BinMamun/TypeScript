"use strict";
console.log("Hello World!");
const add = () => {
    const num1 = 25, num2 = 35;
    console.log(num1 + num2);
};
add();
function addtion() {
    const num1 = 10, num2 = 15;
    return num1 + num2;
}
console.log(`10 + 15 = ${addtion()}`);
let playerName = "Asif Mahmud";
console.log(playerName);
let age = 25;
console.log(age);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(25, 20));
const fruits = ["Mango", "Apple", "Lichi"];
console.log(fruits);
const person = {
    name: "Diellza",
    age: 22
};
console.log(person);
let a; //Dynamic type. We should not use it in typescript.
a = 13;
console.log(a);
a = "Mountain";
console.log(a);
const myFunc = (r) => {
    return (Math.PI * r * r).toFixed(2);
};
const circleArea = myFunc(25);
console.log(circleArea);
