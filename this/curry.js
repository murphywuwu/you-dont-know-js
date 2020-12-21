function func(fn) {
  var args = [].slice.call(arguments);

  return function () {
    var localArgs = [].slice.call(arguments);
    return fn.apply(fn, args.concat(localArgs));
  }
}