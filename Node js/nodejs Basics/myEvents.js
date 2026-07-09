const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
eventEmitter.on('greet', (username) => {
    console.log(`Hello, ${username} welcome to Node.js events!`);
})

// Register a one-time event listener for the 'pushnotification' event
eventEmitter.once('pushnotification', (message) => {
    console.log(`You have a new push notification: ${message}`);
}); 

//emit the 'greet' event
// eventEmitter.emit('greet', 'Balasubramani');

// eventEmitter.emit('pushnotification', 'You have a new message from Balu!');
// eventEmitter.emit('pushnotification', 'You have a new message from John!'); // This will not trigger the event listener since it's a one-time listener  

const myListener = () => {
    console.log('This is a test event listener!');
}
eventEmitter.on('test', myListener);
eventEmitter.emit('test'); // This will trigger the 'test' event and execute the myListener function