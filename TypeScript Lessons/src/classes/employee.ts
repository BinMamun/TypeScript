//access modifier
export class employee {
  constructor(
    public name: string,
    private age: number,
    readonly country: string) { }

  empInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Country ${this.country}`;
  }
}