var anotherObject = {
  a: 2
};


var myObject = Object.create(anotherObject);

for (var k in myObject) {
  console.log('found: ' + k);
}

console.log('a' in myObject); // true

anotherObject.a; // 2
myObject.a; // 2

console.log(anotherObject.hasOwnProperty('a')); // true
console.log(myObject.hasOwnProperty('a')); // false

myObject.a++; // 隐式屏蔽！

console.log(anotherObject.a); // 2
console.log(myObject.a); // 3

console.log(myObject.hasOwnProperty('a')); // true
