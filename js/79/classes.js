//(function () {
  'use strict';

  /*const myObj = {
    name: 'John',
    /*print: function () {
      console.log(this.name);
    }* /
    print() {
      console.log(this.name);
    }
  };*/

  function foo() {
    let x = 5;
  }

  class Person {
    weight = 0;
    #age = 20;

    constructor(first, last) {
      this.first = first;
      this.last = last;
      //this.weight = 0;

      this.#age = 50;
    }

    print() {
      console.log(`I am ${this.first} ${this.last} weight - ${this.weight} age - ${this.#age}`);
    }

    sleep() {
      console.log(`${this.first} ${this.last} is sleeping`);
    }

    talk() {
      console.log(`${this.first} ${this.last} says blah blah blah`);
    }
  }

  const p = new Person('Phil', 'Murphy');

  p.weight = 200;
  //p.#age = 50;

  p.sleep();
  p.talk();
  p.print();

  class Employee extends Person {
    constructor(first, last, department) {
      super(first, last);
      this.department = department;
    }

    print() {
      //console.log(`I am ${this.first} ${this.last} weight - ${this.weight} department - ${this.department}`);
      super.print();
      console.log(`${this.department}`);
    }
  }

  const e = new Employee('Phil', 'Murphy', 'Government');
  e.sleep();
  e.talk();
  e.print();

//}());