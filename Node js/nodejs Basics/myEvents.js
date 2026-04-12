const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
eventEmitter.on('greet', () => {
    console.log('Hello, welcome to Node.js events!');
})