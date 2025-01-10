console.log('Start');
process.nextTick(() => {
  console.log('NextTrick');
});

setImmediate(() => {
  console.log('SetImmediate');
});

setTimeout(() => {
  console.log('SetTimeOut');
}, 1000);

console.log('End');