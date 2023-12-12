console.log("Hello World!");

const add = ()=>{
  const num1 = 25, num2 = 35;
  console.log(num1 + num2);
}
add();

function addtion(){
  const num1 = 10, num2 = 15;
  return num1 + num2;
}

console.log(`10 + 15 = ${addtion()}`);


let playerName:string = "Asif Mahmud";
console.log(playerName);

let age: number = 25;

console.log(age);

function multiply( a:number, b: number){
  return a * b;
}

console.log(multiply(25, 20));


const fruits:string[] = ["Mango", "Apple", "Lichi"];
console.log(fruits);


const person = {
  name: "Diellza",
  age: 22
}

console.log(person);


let a :any; //Dynamic type. We should not use it in typescript.

a = 13 ;
console.log(a);

a = "Mountain";
console.log(a);