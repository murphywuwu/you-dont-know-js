function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: 'awesome'
}

var arr = [1,2,3]

arr.forEach(foo, obj)