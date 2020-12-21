const EventEmitter = require('events');

const myEmitter = Object.create(EventEmitter.prototype);
let m = 0;

// myEmitter.on('event', () => {
//   console.log(++m);
// });

myEmitter.once('event', () => {
  console.log(++m);
});

myEmitter.emit('event');
myEmitter.emit('event');
