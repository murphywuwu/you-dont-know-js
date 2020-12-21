var Something = {
  cool: function() {
    this.greeting = 'hello world';
    this.count = this.count ? this.count + 1:1;
  }
};

Something.cool();
Something.greeting; // 'Hello World'
Something.count; // 1

var Another = {
  cool: function () {
    Something.cool.call(this);
  }
}

Another.call();
Another.greeting; // 'hello world'
Another.count; // 1 (count不是共享状态)