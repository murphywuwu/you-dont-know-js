function mixin(sourceObj, targetObj) {
  for ((var key in sourceObj)) {
    if (!(key in targetObj)) {
      targetObj[key]  = sourceObj[key];
    }
  }

  return targetObj;
}

var Vehicle = {
  engines: 1,
  ignition: function () {
    console.log('turning on my engine.');
  },
  drive: function () {
    this.ignition();
    console.log('steering and moving forward!');
  }
}

var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function () {
    Vehicle.drive.call(this);
    console.log('rolling on all' + this.wheels + ' wheels! ');
  }
})


// id  对象      关联对象id  关联属性
//  0  Car        
//  1  Vehicle    


// 对象id   属性id    属性       属性类型         值
//   0       0       drive       函数 
//   0       1       ignition    函数 
//   0       2       wheels      值             4 
//   0       3       components  对象(关联属性)  对象(id)      
                          

  
         
