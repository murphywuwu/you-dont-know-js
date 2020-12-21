const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// const myEmitter = new MyEmitter();
// myEmitter.on('event', function (a, b) {
//   console.log(a, b, this, this === myEmitter);
// });
const myEmitter = new MyEmitter();
MyEmitter.on('event', (a, b) => {
  console.log(a, b, this);
});


const myEmitter = new MyEmitter();
myEmitter.on('event',);

myEmitter.emit('event', 'a', 'b');

//  event callback  register_way  
//        cb  num      on
//                     once
// [{}, {}, {}, {}]

// 注册(on): 添加

// 取消注册: 删除
// off(event)
// removeListeners(cb)

// 发射(emit): 查找
// sql: select callback from events_table where event == 'event'
// let args = [].slice.call(arguments, 1);
// for (let i = 0; i < events.length; i++) { let { event } = events[i]; if (event == 'params') { let cb = events[cb]; cb.call(this, args) } }



