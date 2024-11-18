// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Listen for the 'greet' event
myEmitter.on('greet', () => {
  console.log('Hello, welcome to the event-driven world!');
});

// Emit the 'greet' event
myEmitter.emit('greet');  // Output: Hello, welcome to the event-driven world!
