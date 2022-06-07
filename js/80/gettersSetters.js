//(function () {
  'use strict';

  function createPerson(first, last) {
    return {
      first: first,
      last: last,

      /*
      //getFullName: function () {
      getFullName() {
        return `${this.first} ${this.last}`;
      },

      //setFullName: function (fullName) {
      setFullName(fullName) {
        let names = fullName.split(' ');
        this.first = names[0];
        this.last = names[1];
      }*/

      get fullName() {
        return `${this.first} ${this.last}`;
      },
      set fullName(fullName) {
        let names = fullName.split(' ');

        if (names[1] !== 'Trump') {
          throw new Error('You are not Donald Trump!');
        }
        this.first = names[0];
        this.last = names[1];
      }
    };
  }

  const p = createPerson('Joe', 'Biden');
  p.first = 'Jill';
  console.log(p.first, p.last);

  //p.setFullName('Donald Trump');
  //console.log(p.getFullName());

  p.fullName = 'Barack Obama';
  console.log(p.fullName);
//}());