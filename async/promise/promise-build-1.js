class Promise {
  callbacks = [];
  state = 'pending';
  result;

  static resolve(val) {
    return new Promise((resolve) => {
      resolve(val);
    });
  }

  constructor(fn) {
    fn(this.async_fn(this._resolve.bind(this)))
  }
  async_fn (fn) {
    return (value) => {
      if(this.state == 'fulfilled') return;
      setTimeout(() => {
        fn(value);
      }, 0);
    }
  }
  then(onFulfilled) {
    if (this.state == 'pending' ) {
      this.callbacks.push(onFulfilled);
    }
    else {
      onFulfilled(this.result);
    }
  
    return this;
  }
  _resolve(value) {
    let len = this.callbacks.length;
    console.log('len', len);
    this.result = value;

    for (let i = 0; i < len; i++) {
      let fn = this.callbacks[i];
      this.result = fn(this.result);      
    }
    this.state = 'fulfilled';
  }
}

// 执行resolve之后，再执行then后注册的回调函数
let p = new Promise(resolve => {
  console.log('同步执行');
  // 在回调函数注册之前调用
  resolve('同步执行1');

}).then(tip => {
  console.log('then1', tip);
  return '同步执行2';
}).then(tip => {
  console.log('then2', tip);
  return '同步执行3';
});


setTimeout(() => {
  p.then((tip) => {
    console.log('then3', tip);
  });
});


// then -> resolve -> cb

// let p = new Promise(resolve => {
//   setTimeout(() => {
//     console.log('done');
//     // 调用resolve，执行回调函数     
//     resolve('5秒')
//   }, 5000);
//   // 调用then，注册回调函数
// }).then((tip) => {
//   console.log('then1', tip);
// }).then((tip) => {
//   console.log('then2', tip)
// })

