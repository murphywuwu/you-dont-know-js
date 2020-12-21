var p = Promise.resolve(21);

p
.then((v) => {
  console.log(v);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v*2);      
    }, 100);
  });
})
.then((v) => {
  console.log(v);
});