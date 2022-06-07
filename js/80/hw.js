//(function () {
  'use strict';

  class Vehicle {
    //color;
    //#speed;

    static numberOfVehicles = 0;

    static showNumberOfVehicles() {
      console.log(`There are ${Vehicle.numberOfVehicles} vehicles`);
    }

    constructor(color) {
      this.color = color;
      Vehicle.numberOfVehicles++;
    }

    go(speed) {
      this.speed = speed;
      console.log(`${this.color} vehicle now going ${this.speed}`);
    }

    print() {
      console.log(`${this.color} vehicle is going ${this.speed}`);
    }
  }

  class Plane extends Vehicle {
    constructor(color) {
      super(color);
    }

    go(speed) {
      this.speed = speed;
      console.log(`${this.color} plane now flying ${this.speed}`);
    }
  }

  const v = new Vehicle('red');
  v.go(100);
  v.print();

  Vehicle.showNumberOfVehicles();

  const p = new Plane('blue');
  p.go(200);
  p.print();

  Vehicle.showNumberOfVehicles();
  /////////////////

  const vehiclePrototype = {
    // go: function (speed) {
    go(speed) {
      this.speed = speed;
      console.log(`${this.color} vehicle now going ${this.speed}`);
    },
    // print: function () {
    print() {
      console.log(`${this.color} vehicle is going ${this.speed}`);
    }
  };

  function createVehicle(color) {
    const v = Object.create(vehiclePrototype);
    v.color = color;
    return v;
  }

  const v1 = createVehicle('red');
  v1.go(100);
  v1.print();

  /////////

  function Vehicle2(color) {
    this.color = color;
  }
  //Vehicle2.prototype.go = function (speed) {...}
  Object.assign(Vehicle2.prototype, vehiclePrototype);

  const v2 = new Vehicle2('red');
  v2.go(100);
  v2.print();

  /////

  function createVehicle2(color) {
    const v = {
      color: color/*,
      go: function (speed) {}
      print: function () {}*/
    };

    Object.assign(v, vehiclePrototype);

    return v;
  }

  const v3 = createVehicle2('red');
  v3.go(100);
  v3.print();

  console.log(v, v1, v2, v3);
//}());

//////////// mixin

function Printable() {}
Printable.prototype.print = function () {
  console.log(`${this} is being printed`);
};

function Drawable() {}
Drawable.prototype.draw = function () {
  console.log(`${this} is being drawn`);
};

function PrintableAndDrawable() {}
PrintableAndDrawable.prototype = Object.create(Printable.prototype);
//PrintableAndDrawable.prototype = Object.create(Drawable.prototype);
Object.assign(PrintableAndDrawable.prototype, Drawable.prototype);
//Object.assign(PrintableAndDrawable.prototype, vehiclePrototype);
PrintableAndDrawable.prototype.constructor = PrintableAndDrawable;

const pad = new PrintableAndDrawable();
pad.print();
pad.draw();