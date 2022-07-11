import { runInThisContext } from "vm";

const myName = 'Juan';
const myAge = 19;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  // constructor(private age: number, private name: String) {}

  getsummary() {
    return `my name is ${this.name}
    and i am ${this.age}`;
  }
}

const juan = new Persona(19, 'Juan');
juan.getsummary();
