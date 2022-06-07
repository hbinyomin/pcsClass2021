(function () {
  //'use strict';

  const greeter1 = {
    greeting: 'Hello'
  };

  const greeter2 = {
    greeting: 'Shalom!'
  };

  function greet(name, age) {
    console.log(this.greeting, name, age);
    return 20;
  }

  //greet('Joe');

  const result = greet.call(greeter1, 'Joe', 103);
  console.log(result);

  greet.call(greeter2, 'Joe', 103);

  const params = ['Joe', 103];
  greet.apply(greeter1, params);
  greet.call(greeter1, params[0], params[1]);

  greet.apply(greeter2, ['Joe', 103]);

  const sayHello = greet.bind(greeter1);
  // later when button clicked
  sayHello('Joe', 103);

  const sayShalomToKamela = greet.bind(greeter2, 'Kamala');
  // later
  sayShalomToKamela(60);

  const sayShalomToKamela60 = greet.bind(greeter2, 'Kamala', 60);
  // later
  sayShalomToKamela60();

  /////////

  console.log(this);

  const potus = {
    name: 'Joe Biden',
    age: 103,
    /*print: function () {
      console.log(this.name, this.age);
    }*/
    //print: () => console.log(this.name, this.age)
    print: function() {
      console.log(this);
      //const arrowPrintFunction = () => console.log(this.name, this.age);
      //arrowPrintFunction();
      (() => console.log(this.name, this.age))();
    }
    /*addThePrint: function () {
      this.print = () => console.log(this.name, this.age);
    }*/
  };

  //potus.addThePrint();
  potus.print();

}());