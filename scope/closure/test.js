function foo() {
  var n = 0;
  return function bar() {
    console.log(n++);
  }
}

// 函数每调用一次都会创建新的执行上下文以及词法作用域
// 执行上下文里关联的词法作用域是通过该词法作用域对应函数的[[scope]]拷贝的
var baz_a = foo();
var baz_b = foo();

// 函数创建时，通过[[scope]]属性保存了所在执行环境的作用域链(词法环境)
// 函数执行时，会创建新的执行环境，并且通过(浅)复制自身[[scope]]中的对象构建起执行环境中的作用域链

window  window 
foo(1)  foo(2)  
||      ||
foo()   foo()

window     window    window  window
foo(1)     foo(1)    foo(1)  foo(1)
baz_a(1)   baz_a(2)  baz_a(3)   baz_a(4)

baz_a()    baz_a()   baz_a()    baz_a()

foo()
window
foo(2)     foo(2)    foo(2)  foo(2)
baz_b(1)  baz_b(2)   baz_b(3) baz_b(4)


baz_b()   baz_b()    baz_b()  baz_b()



// foo = {
//   code: foo,
//   lexicalEnviroment: {
//     n: 0
//   }
// }

// bar = {
//   code: bar,
//   lexicalEnviroment: {
//     outer: foo
//   }
// }

