/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter(x => x % 2 === 0)
    .map(x => `${x} is even`)
    .forEach(x => console.log(x));

rxjs.from(numbers)
  .pipe(
    rxjs.operators.filter(x => x % 2 === 0),
    rxjs.operators.map(x => `${x} is even`)
  )
  .forEach(x => console.log(x));*/

/*rxjs.interval(1000)
  .pipe(
    rxjs.operators.take(10),
    rxjs.operators.filter(x => x % 2 === 0),
    rxjs.operators.map(x => `${x} is even`)
  )
  .forEach(x => console.log(x));*/

//console.log('after');

setInterval(() => console.log(new Date().toLocaleTimeString(), 250));


const theButton = document.getElementById('theButton');
//let clicks = 0;
/*const clickHandler = () => {
  console.log(`${++clicks} click was at ${new Date().toLocaleTimeString()}`);
  if (clicks === 3) {
    theButton.removeEventListener('click', clickHandler);
  }
};
theButton.addEventListener('click', clickHandler);*/

/*rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.take(3),
    rxjs.operators.map(e => `${++clicks} click was at ${e.timeStamp}`)
  )
  .forEach(x => console.log(x));*/

/*rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.take(3),
    rxjs.operators.scan(count => count + 1, 0),
    rxjs.operators.map(c => `${c} click was at ${new Date().toLocaleTimeString()}`)
  )
  .forEach(x => console.log(x));*/

//let clicks = 0;
/*let lastClick = 0;
const clickHandler = () => {
  const now = new Date();
  if (now - lastClick > 1000) {
    console.log(`${++clicks} click was at ${new Date().toLocaleTimeString()}`);
    lastClick = new Date();
  }
};
theButton.addEventListener('click', clickHandler);*/

/*rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.throttleTime(1000),
    rxjs.operators.map(e => `${++clicks} click was at ${e.timeStamp}`)
  )
  .forEach(x => console.log(x));*/

  /*const subscription = rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.map(e => `${++clicks} click was at ${e.timeStamp}`)
  )
  .subscribe(x => {
    console.log(x);
    //if (clicks === 3) {
    //  subscription.unsubscribe();
    //}
  });

  setTimeout(() => subscription.unsubscribe(), 5000);*/


  /*try {
    const subscription = rxjs.fromEvent(theButton, 'click')
      .pipe(
        rxjs.operators.take(3),
        rxjs.operators.map(e => {
          throw new Error('OOPS - Something went wrong');
          return `${++clicks} click was at ${e.timeStamp}`;
        }))
      .subscribe({
        next: x => console.log(x),
        //error: err => console.log(err),
        complete: () => console.log('complete')
      });
    } catch (err) {
      console.log('caught', err);
    }*/

/*
rxjs.Observable.create(observer => {
  observer.next(1);
  //observer.error('oops');
  observer.next(2);
  observer.complete();
  observer.next(3);

  let i = 4;
  setInterval(() => observer.next(i++), 1000);


})
.pipe(
  rxjs.operators.map(x => `got ${x}`),
)
.subscribe({
  next: x => console.log(x),
  error: err => console.log(err),
  complete: () => console.log('complete')
});*/

rxjs.Observable.create(observer => {
  theButton.addEventListener('click', () => observer.next(new Date().toLocaleTimeString()));
})
.pipe(
  rxjs.operators.map(c => `got a click at ${c}`),
).subscribe({
  next: x => console.log(x),
  error: err => console.log(err),
  complete: () => console.log('complete')
});