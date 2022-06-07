//(function () {
  'use strict';

  const organism = {};
  const animal = Object.create(organism);
  const mammal = Object.create(animal);
  const dog = Object.create(mammal);

  mammal.hasHair = true;
  animal.hasHair = false;

  dog.speak = function () {
    console.log('woof');
  };

  dog.speak();

  ////////////

  const spot = Object.create(dog);
  spot.name = 'Spot';
  spot.color = 'black';
  spot.weight = 20;
  spot.breed = 'Chihuahua';
  spot.master = {
    first: 'Joe',
    last: 'Biden'
  };

  console.log(spot.name, spot.color, spot.weight, spot.breed);
  spot.speak();

  const fluffy = Object.create(spot);
  fluffy.name = 'Fluffy';
  //fluffy.color = 'white';
  console.log(fluffy.name, fluffy.color, fluffy.weight, fluffy.breed);
  fluffy.speak();

  //fluffy.master.first = 'Jill';
  fluffy.master = {
    first: 'Dr Jill',
    last: 'Biden'
  }

  console.log(spot.master, fluffy.master);
//}());