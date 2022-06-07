(function () {
  'use strict';

  function doSomething() {
    console.log(this);
  }

  doSomething();

  const potus = {
    first: 'Joe',
    last: 'Biden',
    age: 100,
    print1: function () {
      console.log(this.first, this.last, this.age);
    },
    /*print1:  () => {
      console.log(this.first, this.last, this.age);
    },*/
    grow: function () {
      console.log(this);
      /*setInterval(function () {
        this.age++;
        this.print1();
      }, 1000);*/

      setInterval(() => {
        this.age++;
        this.print1();
      }, 1000);
      
      /*const that = this;
      setInterval(function () {
        that.age++;
        that.print1();
      }, 1000);*/
      /*function doTheGrowing() {
        this.age++;
        this.print1();
      }
      const actuallyGrow = doTheGrowing.bind(this);
      setInterval(actuallyGrow, 1000);*/
    }
  };

  potus.print1();
  potus.grow();

  //const potusPrint = potus.print;
  //potusPrint();
}());