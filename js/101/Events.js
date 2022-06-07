const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(11);
/////


eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));
eventEmitter.on('classOver', () => console.log('class is over'));

eventEmitter.emit('classOver');