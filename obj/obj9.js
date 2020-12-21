var myObject = {};

Object.defineProperty(myObject, 'a', {
  value: 42,
  writable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));