function Vehicle() {
  this.engine = 1;
}

Vehicle.prototype.ignition = function () {
  console.log('Turning on my engine.');
}

Vehicle.prototype.drive = function () {
  this.ignition();
  console.log('steering and moving forward!');
}

function Car () {
  var car = new Vehicle();

  // 数据: engine  wheels
  car.wheels = 4;

  // 方法: ignition, drive
  var vehDrive = car.drive;

  car.drive = function () {
    vehDrive.call(this);
    console.log('rolling on all ' + this.wheels + ' wheels! ');
  }

  return car;
}

var myCar = new Car();
myCar.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!






