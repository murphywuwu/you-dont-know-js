// p.then(function() {
//   p.then(function() {
//     console.log('C');
//   });
//   console.log('A');
// });

// p.then(function() {
//   console.log('B')
// });
// // A B c

// var p3 = new Promise(function(resolve, reject){
//   resolve('b');
// });

// var p1 = new Promise(function(resolve, reject) {
//   resolve(p3);
// });

// var p2 = new Promise(function(resolve, reject) {
//   resolve('a');
// });

// p1.then(function(v) {
//   console.log(v);
// });

// p2.then(function(v) {
//   console.log(v);
// });
// for (var key in Promise.prototype) {
  // if (Promise.prototype.hasOwnProperty(key)) {
    // console.log(key);
  // }
// }

// 示例代码1
var p = Promise.resolve(21);

var p2 = p.then(function(v) => {
  console.log(v);
  return v * 2;
});

var p3 = p2.then(function(v) => {
  console.log(v);
});
