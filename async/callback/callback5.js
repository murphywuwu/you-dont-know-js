// 分离回调
function success(data) {
  console.log(data);
}

// failer是可选的，如果没有提供的话，就是假定这个错误可以吞掉
function failure(err) {
  console.log(err);
}

ajax('http://some.url.1', success, failure);
