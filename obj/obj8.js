var myObject = {
  a: 2
};

console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);

// configurable: 禁止删除
Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: true, // 改
  configurable: false, // 删，配置
  enumerable: true
});
myObject.a = 3;
console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);



