// 示例代码2
var p = Promise.reolve(21);

p.then(function(v) {
  console.log(v);

  return new Promise(function(resolve, reject){
    resolve(v*2);
  })
}).then(function(v) => {
  console.log(v);
})