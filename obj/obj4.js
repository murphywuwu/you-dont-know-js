var myObject = {}

myObject[true] = 'foo';
myObject[3] = 'bar';
myObject[myObject] = 'baz';

// console.log(myObject[true]);
// console.log(myObject[3]);
// console.log(myObject[myObject]);

console.log(myObject["true"]);
console.log(myObject["3"]);
console.log(myObject["[object Object]"]);