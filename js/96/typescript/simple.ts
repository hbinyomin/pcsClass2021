function greeter(person: string | number) {
    return `Hello, ${person}`;
}

// let person: number = 5;
let person: number | string = 5; //'Joe Biden'; // {name: 'Joe Biden'};
person = 5;
person = 'Joe Biden';

document.body.innerHTML = greeter(person);

let president: 'Donald Trump' | 'George Washington' | 'Ronald Reagan';
president = 'Donald Trump';

interface Person {
    firstName: string;
    lastName: string;

    //print();
}

function greeter2(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const potus: {firstName: string, age?: number} /*Person*/ = {
    firstName: 'Joe',
    //xfirstName: 'Joe',
    //lastName: 'Biden',
    //age: 99
}
potus.age = 99;
console.log(potus);
//document.body.innerHTML = greeter2(potus);

class Student implements Person {
  /*firstName: string;
  lastName: string;
  age: number;
  private ssn: string;*/

  constructor(public firstName: string, public lastName: string, public age?: number, private ssn?: string) {
    /*this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.ssn = ssn;*/
  }

  print() {
    console.log(`${this.firstName} ${this.lastName}${this.age} ${this.ssn}`);
  }

  getGrades()/*: number[]*/ {
    return [1, 2, 3];
  }
}

const student = new Student('Joe', 'Biden', 99, '123-45-6789');
//student.firstName = 'Joe';
//student.lastName = 'Biden';
document.body.innerHTML = greeter2(student);
student.print();
console.log(student.ssn);
let grades = student.getGrades();
grades.push('foo');

function removeFromArray<T>(array: T[], index: number): T[] {
   array.splice(index, 1);
   return array;
}

let numbers = [1, 2, 3];
//numbers.push('foo');
let numbers2 = removeFromArray(numbers, 2);
numbers2.push('foo');
console.log(numbers);

let strings = ['foo', 'bar', 'baz'];
//strings.push(5);
let strings2 = removeFromArray(strings, 1);
strings2.push(5);
console.log(strings2);