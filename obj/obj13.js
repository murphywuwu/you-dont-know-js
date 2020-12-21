var myObject = {
  a: 2
};

// in操作符会检查属性是否在对象及其[[prototype]]原型链中
console.log('a' in myObject);
console.log('b' in myObject);

// hasOwnProperty只会检查属性是否在myObject对象中
console.log(myObject.hasOwnProperty('a'));
console.log(myObject.hasOwnProperty('b'));