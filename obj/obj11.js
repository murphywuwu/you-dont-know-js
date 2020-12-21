var myObject = {
  // 给a定义一个getter
  get a() {
    return 2;
  }
};

Object.defineProperty(
  myObject,
  'b',
  {
    get: function() {
      return this.a * 2 
    },
    enumerable: true
  }
)

myObject.a = 3;
console.log(myObject.a);
console.log(myObject.b);