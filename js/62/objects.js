'use strict';

function printPerson(person) {
  console.log(person.name, person.age);
}

const potus = {
  name: 'Joe Biden',
  age: 100,
  print: function () {
    console.log(this.name, this.age);
  }
};

printPerson(potus);
console.log(potus);

const flotus = {
  name: 'Jill Biden',
  age: 75,
  print: function () {
    console.log(this.name, this.age);
  }
};

printPerson(flotus);
console.log(flotus);


function createPerson(name, age) {
  return {
    name: name,
    age: age,
    print: function () {
      console.log(this.name, this.age);
    }
  };
}

const psaki = createPerson('Jan Psaki', 50);
printPerson(psaki);
console.log(psaki);
psaki.print();

const fauci = createPerson('Facui', 80);
printPerson(fauci);
console.log(fauci);
fauci.print();

/*fauci.age = 81;
printPerson(fauci);
console.log(fauci);
fauci.print();*/

//////////////////
/*
<Person>
  <name>Joe</name>
  <age>100</age>
</Person>

<Person name="Joe" age="100"/>
*/

fauci.statements = ['no mask', 'mask', 'no mask'];

console.log(fauci, typeof fauci);
const facuiString = JSON.stringify(fauci);
console.log(facuiString, typeof facuiString);

const reconstitutedFauci = JSON.parse(facuiString);
console.log(reconstitutedFauci, typeof reconstitutedFauci);
//reconstitutedFauci.print();

const rcf2 = createPerson(reconstitutedFauci.name, reconstitutedFauci.age);
rcf2.print();

