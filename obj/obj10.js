var myObject = {
  a: 2
}

Object.preventExtensions(myObject);

myObject.b = 3;
console.log(myObject.b); // undefined

// 密封对象
// Object.seal: 这个方法实际上会在一个现有对象上调用Object.preventExtensions()并把所有现有属性标记为configurable:false;
// 密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性

// 冻结对象
// Object.freeze: 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal并把所有”数据访问“属性标记为writebal:false，这样就无法修改它的值
 