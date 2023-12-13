//access modifier
export class employee {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    empInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Country ${this.country}`;
    }
}
