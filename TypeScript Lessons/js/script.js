import { player } from "./classes/player.js";
import { employee } from "./classes/employee.js";
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
function userInfo(id, user) {
    console.log(`Your Id: ${id}, Name: ${user.name}, Age: ${user.age}`);
}
userInfo(542, { name: "Perker", age: 28 });
function greetings(user) {
    return `Hello ${user.age > 50 ? "Sir!" : "Mr." + user.name}`;
}
console.log(greetings({ name: "Mark", age: 49 }));
// Signature
let circle;
circle = (r) => {
    return `Area: ${(Math.PI * r * r).toFixed(2)}\nCircumference: ${(2 * Math.PI * r).toFixed(2)}`;
};
console.log(circle(20));
//class
const salah = new player("Mohammad Salah", 32, "Egypt");
const robert = new player("Robert ", 22, "US");
console.log(salah.play());
console.log(robert.play());
const players = [];
players.push(salah);
players.push(robert);
console.log(players);
console.log(players[0]);
console.log(players[1]);
//access modifier
const mahmud = new employee("Mahmud Hasan", 30, "Bangladesh");
console.log(mahmud);
console.log(mahmud.empInfo());
mahmud.name = "Ahsan";
console.log(mahmud);
console.log(mahmud.empInfo());
//Generics
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Azan",
    age: 33
});
console.log(user.id);
console.log(user.name);
console.log(user.age);
const calculateAge = (obj) => {
    let age = Date.parse(obj.dob);
    return age;
};
let userAge = calculateAge({
    name: "Azan",
    dob: "2023-11-30"
});
console.log(userAge);
