if (
  p !== null &&
  (
    typeof p === 'object' ||
    typeof p === 'function'
  ) && 
  typeof p.then === 'function'
) {
  // 假定这是一个thenable!
}
else {
  // 不是thenable
}

var o = { then: function () {}}
// thenable鸭子类型检测会把v当做是thenable
var v = Object.create(o);

v.someStuff = 'cool';
v.otherStuff = 'not so cool';
v.hasOwnProperty('then');

