var myArray = ['foo', 42, 'bar'];

console.log(myArray.length); // 3
console.log(myArray[0]); // 'foo'
console.log(myArray[2]); // 'bar'

myArray.baz = 'baz';
console.log(myArray.length);
console.log(myArray.baz); 

myArray['3'] = 'baz';
console.log(myArray.length);
console.log(myArray[3], myArray);

myArray['1'] = 'baz';
console.log(myArray.length);
console.log(myArray[1], myArray);
