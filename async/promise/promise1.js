function add(getX, getY, cb) {
  var x, y;
  getX((xVal) => {
    x = xVal;

    if(y != undefined) {
      cb(x+y);
    }
  });

  getY((yVal) => {
    y = yVal;

    if(x != undefined) {
      cb(x+y);
    }
  })
}

add(fetchX, fetchY, (sum) => {
  console.log(sum);
});

//   x        y
//   0        0 
//   1        1
//   1+       1+



