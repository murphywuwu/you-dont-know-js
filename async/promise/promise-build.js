class Promise {
  constructor(fn) {
    this.callbacks = [];
    this.state = 'pending';
    this.val = null; // 保存结果
    fn(this._resolve.bind(this));
  }

  _resolve(val) {
    let callbacks = this.callbacks;
    let len = callbacks.length;
    this.val = val;
    this.state = 'fulfilled';

    for(let i = 0; i < len; i++) {
      this.val = callbacks[i](this.val);
    };
  }

  then(onFulfillment) {
    if (this.state === 'pending') {
      this.callbacks.push(cb);
    }
    else {
      this.val = onFulfillment(this.val);
    }
    
    return this;
  }