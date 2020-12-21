function anotherFunction () {}

var anotherObject = {
  c: true
}

var anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction
}

anotherArray.push(anotherObject, myObject);

// 对象id    属性     值       
//           a       2

// 关联原型对象表
// 对象id  对象               关联对象id   关联属性
// 0      myObject              1       __proto__
// 1      Object.prototype     null     __proto__

// 关联属性对象表
// 0      myObject              1          b
// 0      myObject              2          c
// 0      myObject              3          d
// 1      anotherObject        
// 2      anotherArray          1
// 2      anotherArray          0
// 3      anotherFunction       

// 0 -> 1
//      2 -> 1
//      3    0

// 浅复制：遍历一个或多个源对象的所有可枚举的自有键并把它们复制(使用=操作符赋值)到目标对象，最后返回目标对象
var newObj = Object.assign({}, myObject);

console.log(newObj.a);
console.log(newObj.b === anotherObject);
console.log(newObj.c === anotherArray);
console.log(newObj.d === anotherFunction)