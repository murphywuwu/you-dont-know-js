const EventEmitter = require('events');

const myEmitter = Object.create(EventEmitter.prototype);

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchrounously');
  });
});

myEmitter.emit('event', 'a', 'b');