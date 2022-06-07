/* global app */

for (let j = 0; j < 10; j++) {
  app.counter1.increment();
}

//const theCounter2a = app.counter2();
const theCounter2a = app.counter2.createCounter();
for (let j = 0; j < 5; j++) {
  theCounter2a.increment();
}

//const theCounter2b = app.counter2();
const theCounter2b = app.counter2.createCounter();
for (let j = 0; j < 15; j++) {
  theCounter2b.increment();
}

console.log(app.counter1.getCount(), theCounter2a.getCount(), theCounter2b.getCount());
//console.log(theCounter2a.getNumberOfCounters());
console.log(app.counter2.getNumberOfCounters());