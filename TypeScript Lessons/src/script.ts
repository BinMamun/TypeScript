console.log("Hello World!");

const add = () => {
  const num1 = 25, num2 = 35;
  console.log(num1 + num2);
}
add();

function addtion() {
  const num1 = 10, num2 = 15;
  return num1 + num2;
}

console.log(`10 + 15 = ${addtion()}`);


let playerName: string = "Asif Mahmud";
console.log(playerName);

let age: number = 25;

console.log(age);

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(25, 20));


const fruits: string[] = ["Mango", "Apple", "Lichi"];
console.log(fruits);


const person = {
  name: "Diellza",
  age: 22
}

console.log(person);


let a: any; //Dynamic type. We should not use it in typescript.

a = 13;
console.log(a);

a = "Mountain";
console.log(a);


const myFunc = (r: number) => {
  return (Math.PI * r * r).toFixed(2);
}

const circleArea = myFunc(25);
console.log(circleArea);

//Alias

type stringOrNum = number | string;
type userType = { name: string, age: number }

function userInfo(id: stringOrNum, user: userType) {
  console.log(`Your Id: ${id}, Name: ${user.name}, Age: ${user.age}`);
}

userInfo(542, { name: "Perker", age: 28 });

function greetings(user: userType) {
  return `Hello ${user.age > 50 ? "Sir!" : "Mr." + user.name}`;
}

console.log(greetings({ name: "Mark", age: 49 }));

// Signature

let circle: (r: number) => string

circle = (r) => {
  return `Area: ${(Math.PI * r * r).toFixed(2)}\nCircumference: ${(2 * Math.PI * r).toFixed(2)}`
}

console.log(circle(20));


//class

class player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    return `${this.name} is ${this.age} years old, and playing for ${this.country}.`;
  }
}

const salah = new player("Mohammad Salah", 32, "Egypt");
const robert = new player("Robert ", 22, "US");

console.log(salah.play());
console.log(robert.play());

const players: player[] = [];

players.push(salah);
players.push(robert);

console.log(players);

console.log(players[0]);
console.log(players[1]);