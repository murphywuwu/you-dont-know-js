var myObject = {
  // 给a定义一个getter
  get a() {
    return this._a
  },

  // 给a定义一个setter
  set a(val) {
    this._a = val * 2;
  }
} 

console.log(myObject.a);
myObject.a = 2;
console.log(myObject.a);