
// 回调未调用: 设置超时函数

function timeoutify(fn, delay) {
  var intv = setTimeout(() => {
    intv = null;

    fn(new Error('Timeout!'));
  }, delay);

  return function () {
    // 还没有超时
    if (intv) {
      clearTimeout(intv);
      fn.apply(this, arguments);
    }
  }
}


function foo(err, data) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
}

ajax('http://some.url.1', timeoutify(foo, 500));

// 调用次数  输入数据               调用时间
//    0     数据类型(str, int..)
//    1     错误(成功)             调用过早 
//    1+


