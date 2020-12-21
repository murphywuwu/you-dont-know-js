const EventEmitter = require('events');

const myEmitter = Object.create(EventEmitter.prototype);


myEmitter.on('error', (err) => {
  console.log('whoops!there was an error');
});
myEmitter.emit('error', new Error('whoops!'));