foo(x) {
  // 开始做点可能耗时的工作
}

foo(42);

on(foo 'completion') {
  //  可以进行下一步了
}

on(foo 'error') {
  // 啊， foo(...)中出错了
}


function foo(x) {


  return listener;
}

var evt = foo(42);

evt.on('completion', () => {

});

evt.on('failure', () => {

})