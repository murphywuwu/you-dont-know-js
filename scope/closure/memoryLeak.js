var showMem = function () {
  var mem = process.memoryUsage();

  var format = function(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB'
  }

  console.log('Process: heapTotal ' + format(mem.heapTotal) + ' HeapUsed ' + format(mem.heapUsed) + ' rss ' + format(mem.rss));
}

var useMem = function() {
  var size = 20 * 1024 * 1024;
  var arr = new Array(size);

  for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }

  return arr;
}

var total = [];

for (var j = 0; j < 3; j++) {
  showMem();
  // total.push(useMem());
  function makefunc(j) {
    function func(x) {
      return x * i
    }
    return func
  }
  total.push(makefunc(j));
}

showMem();