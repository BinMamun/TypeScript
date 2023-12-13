
//Player class

export class player {
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