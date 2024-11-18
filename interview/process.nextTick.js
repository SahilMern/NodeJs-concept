console.log('Start');

// process.nextTick will run first, before setImmediate or setTimeout
process.nextTick(() => {
  console.log('This runs immediately after the current block, before any I/O or timers.');
});

// setImmediate will run after the current event loop finishes
setImmediate(() => {
  console.log('This runs after the current block and nextTick, but before I/O events.');
});

// setTimeout runs after the specified delay (or at the end of the event loop cycle)
setTimeout(() => {
  console.log('This runs after setImmediate, after a delay.');
}, 0);

console.log('End');
