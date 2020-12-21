
class Promise {
  callbacks = [];
  state = 'pending';
  num = 0;

  then(onFullfilled) {
    return new Promise(resolve => {
      this._handle({
        onFullfilled: onFullfilled || null,
        resolve: resolve
      })
    })
  }

  _handle(callback) {
    if (this.state  === 'pending') {
      this.callbacks.push(callback);
      return;
    }

    var ret = callback.onFullfilled(this.value);
    this.num++;
    callback.resolve(ret);
  }

  _resolve(value) {
    this.state = 'fullilled';
    this.value = value;

    const len = this.callbacks.length;
    if (this.num >= len) return;

    this._handle(this.callbacks[this.num]);
    // this.callbacks.forEach(callback => this._handle(callback));
  }
}