var prefix = 'foo';

var myObject = {
  [prefix + 'bar']: 'hello',
  [prefix + 'baz']: 'world'
}

console.log(myObject['foobar']);
console.log(myObject['foobaz']);