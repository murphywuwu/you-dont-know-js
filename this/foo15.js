function foo(a) {
  this.a = a;
}

// 1.创建(或者说构造)一个全新的对象
// 2.这个新对象会被执行[[prototype]]连接
// 3.这个新对象会绑定到函调用的this
// 4.如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象

var bar = new foo(2)

console.log(bar.2)


