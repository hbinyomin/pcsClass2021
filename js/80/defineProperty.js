//(function () {
'use strict';

const potus = Object.create({ protoFunction: function () { console.log('protoFunction'); } }, {
  //first: 'Joe',
  //last: 'Biden'
  first: { value: 'Joe', writable: true },
  last: { value: 'Biden', configurable: true }
});

potus.age = 105;
//potus.firstName = 'Joe';
console.log(potus);

console.log(potus.first);
potus.first = 'Donald';
//potus.last = 'Trump';

console.log(potus);
delete potus.age;
console.log(potus);
delete potus.last;
console.log(potus);

//potus.position = 'President';
Object.defineProperty(potus, 'position', {
  value: 'President',
  //writable: true,
  //configurable: true
});

Object.defineProperty(potus, 'fullName', {
  get() {
    return `${this.first} ${this.last}`;
  },
  set(value) {
    const parts = value.split(' ');
    this.first = parts[0];
    this.last = parts[1];
  }
});


potus.fullName = 'Donald Trump';
console.log(potus);

class Person {
  //#age;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    //this.#age = 21;
    //this._age = 21;

    let age = 0;

    //this.getAge = () => age;
    //this.setAge = (value) => age = value;
    Object.defineProperty(this, 'age', {
      get() {
        return age;
      },
      set(value) {
        if (value < 0 || value > 120) {
          throw new Error(`Invalid age - ${value}`);
        }
        age = value;
      }
    });
  }

  print() {
    //console.log(`${this.first} ${this.last} ${this.#age}`);
    //console.log(`${this.first} ${this.last} ${this._age}`);
    //console.log(`${this.first} ${this.last} ${this.getAge()}`);
    console.log(`${this.first} ${this.last} ${this.age}`);
  }

  /*get age() {
    return this._age;
  }

  set age(age) {
    if (age < 0 || age > 120) {
      throw new Error('Invalid age');
    }
    this._age = age;
  }*/
}

const p = new Person('Joe', 'Biden');
p.age = 121;
//p._age = 121;
//p.setAge(121);
//console.log(p.getAge());
console.log(p.age);
p.print();
//}());