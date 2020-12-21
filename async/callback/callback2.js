
// 假设DoA，DoD的回调函数是异步调用的
// A -> B -> C -> D -> E -> F

// 如果DoA，DoD的回调函数是同步调用的
// A -> C -> D -> F -> E -> B
doA(() => {
  doC();
  
  doD(() => {
    doF();
  }); 

  doE();
});

doB();