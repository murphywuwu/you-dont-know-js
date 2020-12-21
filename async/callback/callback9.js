// 回调函数：调用过早
function asyncify(fn) {
  var orig_fn = fn,
      intv = setTimeout(() => {
        intv = null;
        if(fn) fn();
      }, 0);

  fn = null;

  return function () {
    if (intv) {
      fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice.call(arguments)));
    }
    else {
      orig_fn.apply(this, arguments);
    }
  }
}
