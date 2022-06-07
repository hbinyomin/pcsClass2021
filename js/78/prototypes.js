//(function () {
  'use strict';

  const potus = {
    first: 'Joe',
    last: 'Biden',
    print: function () {
      console.log(`I am ${this.first} ${this.last}`);
    }
  };

  console.log(potus);
  console.log(potus.first, potus.last);
  potus.print();

  /*
  function printPerson() {
    console.log(`I am ${this.first} ${this.last}`);
  }
  */

  const personFunctions = {
    print: function () {
      console.log(`I am ${this.first} ${this.last}`);
    },
    talk: function () {
      console.log(`${this.first} says hello`);
    }
  };

  function personFactory(first, last) {
    /*return {
      first,
      last,
      print: /*function () {
        console.log(`I am ${this.first} ${this.last}`);
      }* / personFunctions.print,
      talk: personFunctions.talk*/

    const p = {
      first,
      last
    };

    Object.assign(p, personFunctions);

    return p;
  }

  const kamala = personFactory('Kamala', 'Harris');
  const blinken = personFactory('Anthony', 'Blinken');

  console.log(kamala);
  console.log(kamala.first, kamala.last);
  kamala.print();
  kamala.talk();

  console.log(blinken);
  console.log(blinken.first, blinken.last);
  blinken.print();
  blinken.talk();

  // printPerson();

  ///////////////////////

  /*const p = {
    first: 'Donald',
    last: 'Trump'
  };

  p.__proto__ = personFunctions;*/

  const p = Object.create(personFunctions);
  p.first = 'Donald';
  p.last = 'Trump';

  p.print();
  p.talk();

  ///////////////////////

  function Person(first, last) {
    this.first = first;
    this.last = last;
  }

  Person.prototype.print = function () {
    console.log(`I am ${this.first} ${this.last}`);
  };
  Person.prototype.talk = function () {
    console.log(`${this.first} says hello`);
  };

  //Person.prototype.foo = 5;

  const phil = new Person('Phil', 'Murphy');
  console.log(phil);
  console.log(phil.first, phil.last);
  phil.print();
  phil.talk();

  const phil2 = {};
  Person.call(phil2, 'Phil', 'Murphy');
  console.log(phil2);
  console.log(phil2.first, phil2.last);

  const jack = new Person('Jack', 'Chiarelli');
  console.log(jack);
  console.log(jack.first, jack.last);
  jack.print();
  jack.talk();

  //phil.sleep();
  //jack.sleep();

  Person.prototype.sleep = function () {
    console.log(`${this.first} is sleeping`);
  };

  phil.sleep();
  jack.sleep();
  //const jack2 = Person('Jack', 'Chiarelli');


  function Employee(first, last, department) {
    //this.first = first;
    //this.last = last;
    Person.call(this, first, last);
    this.department = department;
  }
  //Employee.prototype = Person.prototype;
  //Employee.prototype = new Person();
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  Employee.prototype.print = function () {
    console.log(`I am ${this.first} ${this.last} and I work in ${this.department}`);
  };
  const bill = new Employee('Bill', 'Gates', 'Microsoft');
  bill.print();
  bill.talk();

  jack.print();
//}());