// 无论是foo先触发还是bar先触发
// a，b中总会有一个处于未定义的状态。
var a, b;

function foo(x) {
  a = x * 2;
  baz();
}

function bar(y) {
  b = y * 2;
  baz();
}

function baz() {
  if (a && b) {
    console.log(a + b);
  }
}

ajax('http://some.url.1', foo);
ajax('http://some.url.2', bar);