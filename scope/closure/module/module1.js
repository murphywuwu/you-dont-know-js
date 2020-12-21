var MyModules = (function Manager() {
  var moduels = {};

  function define(name, deps, impl) {

    for (var i = 0; i < deps.length; i++) {
      deps[i] = moduels[deps[i]];
    }

    moduels[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return moduels[name];
  }

  return {
    define: define,
    get: get
  }
})()

MyModules.define('bar', [], function() {
  function hello(who) {
    return 'let me introduce: ' + who;
  }

  return {
    hello: hello
  }
});


MyModules.define('foo', ['bar'], function(bar) {
  var hungry = 'hippo';
  
  function awesome () {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome: awesome
  }
})

var bar = MyModules.get('bar');
var foo = MyModules.get('foo');

console.log(bar.hello('hippo'));
foo.awesome();
