//Player class
export class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        return `${this.name} is ${this.age} years old, and playing for ${this.country}.`;
    }
}
