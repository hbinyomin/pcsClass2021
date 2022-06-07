(function () {
  'use strict';

  class Student {
    constructor(first, last, age, grade) {
      this.first = first;
      this.last = last;
      this.age = age;
      this.grade = grade;
    }
  }

  const joe = new Student('Joe', 'Biden', 12, 'F');
  console.log(joe);

  const students = [
    joe,
    new Student('Kamala', 'Harris', 11, 'F'),
    new Student('Bernie', 'Sanders', 10, 'F')
  ];

  console.log(students);

  function printStudents(backwards, ...studentArray) {
    studentArray.forEach(student => {
      let { first: a, last: b, /*age, grade*/...rest } = student;
      const { age, grade } = rest;
      /*if(backwards) {
        console.log(`${last} ${first} ${grade} ${age}`);
      } else {
        console.log(`${first} ${last} ${age} ${grade}`);
      }*/
      if (backwards) {
        /*const temp = first;
        first = last;
        last = temp;*/
        [a, b] = [b, a];
      }
      console.log(`${a} ${b} ${age} ${grade}`);
    });
  }

  printStudents(false, ...students);
  printStudents(true, ...students);

  function copyStudentInfo(student) {
    //return new Student(student.last, student.first, student.age, student.grade);
    const { first, last, ...rest } = student;
    //return { first, last, ...rest };
    return { last: first, first: last, ...rest };
  }

  console.log(copyStudentInfo(joe));
}());