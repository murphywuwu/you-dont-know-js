
// class并不像传统面向类的语言一样在声明时静态复制所有行为。如果你(有意或无意)修改或者替换了父'类'中的一个方法
// 那子类和所有实例都会受到影响，因为它们在定义时并没有进行复制，只是使用基于[[prototype]]的实时委托
class C {
  constructor () {
    this.num = Math.random();
  }

  rand() {
    console.log('Random: ' + this.num);
  }
}

var c1 = new C();
c1.rand();

C.prototype.rand = function() {
  console.log('Random: ' + Math.round(this.num * 1000));
}

var c2 = new C();
c2.rand();

c1.rand();

class P {
  foo() { console.log('P.foo') }
}

class C extends P {
  foo() {
    super();
  }
}

var c1 = new C();
c1.foo(); // 'P.foo()'

var D = {
  foo: function() { console.log('D.foo') }
}

var E = {
  foo: C.prototype.foo
}

Object.setPrototypeOf(E, D);

E.foo(); // 'P.foo'