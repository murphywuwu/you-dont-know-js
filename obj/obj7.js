var myObject = {
  a: 2
};


console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: false,
  configurable: true,
  enumerable: true 
})

myObject.a = 3;

console.log(myObject.a); // 2

// 可配置:false
// Object.defineProperty(myObject, 'a', {
//   value: 4,
//   writable: true,
//   configurable: false,
//   enumerable: true
// });

// console.log(myObject.a); // 4 
// myObject.a = 5;
// console.log(myObject.a); // 5

// Object.defineProperty(myObject, 'a', {
//   value: 6,
//   writable: true,
//   configurable: true,
//   enumerable: true
// }); // TypeError: Cannot redefine property: a

