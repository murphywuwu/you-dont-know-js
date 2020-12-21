var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());