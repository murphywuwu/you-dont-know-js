// 不管是哪一个(foo()或bar())后被触发，都不仅会覆盖另外一个给a赋的值，也会重复调用baz()
var a;

function foo() {
  if (!a) {
    a = x * 2;
    baz();
  }
}

function bar(x) {
  if (!a) {
    a = x / 2;
    baz();
  }
}

function baz() {
  console.log(a);
}


ajax('http://some.url.1', foo);
ajax('http://some.url.2', bar);