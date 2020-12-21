var myObject = {};

Object.defineProperty(
  myObject,
  'a',
  { enumerable: true, value: 2 }
);

Object.defineProperty(
  myObject,
  'b',
  // 可枚举：可以出现在对象属性的遍历中
  { enumerable: false, value: 3 }
);

console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));
console.log(Object.getOwnPropertyDescriptor(myObject, 'b'));

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty('b'); // true

console.log(myObject.propertyIsEnumerable('a')); // true
console.log(myObject.propertyIsEnumerable('b')); // false

for (var k in myObject) {
  console.log(k, myObject[k]);
}

console.log(Object.keys(myObject)); // ['a']
console.log(Object.getOwnPropertyNames(myObject)); // ['a', 'b']