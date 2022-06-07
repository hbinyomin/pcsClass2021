//(function () {
  'use strict';

  const vehicleFunctions = {
    go: function (speed) {
      this.speed = speed;
      console.log(`${this.color} car is going ${speed}`);
    },
    print: function () {
      console.log(this.color, this.speed);
    }
  };

  function createVehicle(color) {
    /*return {
      color: color,
      go: function (speed) {
        this.speed = speed;
        console.log(`${this.color} car is going ${speed}`);
      },
      print: function () {
        console.log(this.color, this.speed);
      }
    };*/
    const v = {
      color: color
    };
    Object.assign(v, vehicleFunctions);
    return v;
  }

  const v1 = createVehicle('red');
  const v2 = createVehicle('blue');
  v1.go(100);
  v1.print();
  v2.go(50);
  v2.print();

  //////////////////////////

  function createVehicle2(color) {
    const v = Object.create(vehicleFunctions);
    v.color = color;
    return v;
  }

  const v3 = createVehicle2('green');
  const v4 = createVehicle2('yellow');
  v3.go(100);
  v3.print();
  v4.go(50);
  v4.print();

  vehicleFunctions.stop = function () {
    this.speed = 0;
    console.log(`${this.color} car is stopped`);
  };

  v3.stop();
  v4.stop();

  //////////////////////////

  function Vehicle(color) {
    this.color = color;
  }
  /*Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`${this.color} car is going ${speed}`);
  };
  Vehicle.prototype.print = function () {
    console.log(this.color, this.speed);
  };*/
  Object.assign(Vehicle.prototype, vehicleFunctions);

  const v5 = new Vehicle('black');
  v5.go(75);
  v5.print();

  function Plane(color) {
    this.color = color;
  }
  console.log(Plane.prototype);
  Plane.prototype = Object.create(Vehicle.prototype);
  Plane.prototype.constructor = Plane;
  //Object.assign(Plane.prototype, vehicleFunctions);
  Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`${this.color} plane is flying ${speed}`);
  };

  const p1 = new Plane('white');

  p1.go(250);
  p1.print();

  //////////////////////////

  Vehicle.prototype.clone = function () {
    const copy = new /*Vehicle*/this.constructor(this.color);
    copy.speed = this.speed;
    return copy;
  };

  const cv5 = v5.clone();
  cv5.print();
  cv5.go(100);

  const cp1 = p1.clone();
  cp1.print();
  cp1.go(100);
//}());