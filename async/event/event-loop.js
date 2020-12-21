// eventLoop是一个用作队列的数组
// 先进先出
var eventLoop = [];
var event;

// 永远执行
while(true) {
  // 事件循环的每一轮称为一次tick
  // 一次tick
  if (eventLoop.length > 0) {
    // 拿到队列中的下一个事件
    event = eventLoop.shift();

    // 现在，执行下一个事件
    try {
      event();
    }
    catch(err) {
      reportError(err);
    }
  } 
}

// setTimeout()并没有把你的回调函数挂在事件循环队列中。它所做的是设定一个定时器。
// 当定时器到时后，环境会把你的回调函数放在事件循环中，这样，在未来某个时刻的tick会摘下并执行这个回调                                                                                                        