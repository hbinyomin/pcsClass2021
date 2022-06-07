(async function () {
  'use strict';

  /*fetch('people.json')
    .then(r => r.text())
    .then(t => {
      console.log(typeof t, t);
      const people = JSON.parse(t);
      console.log(typeof people, people);
      people.forEach(peep => {
        console.log(peep);
      });
    });*/

  fetch('people.json')
    .then(r => r.json())
    .then(t => {
      console.log('then is done', typeof t, t);
      t.forEach(peep => {
        console.log(peep);
      });
    });

  console.log('done 1');

  const response = await fetch('people.json');
  const people = await response.json();
  console.log('await is done', people);

  console.log('done 2');
}());