// How can you run multiple asynchronous tasks in Node.js?
const task1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 done'), 1000));
console.log(task1, "1");

const task2 = new Promise((resolve) => setTimeout(() => resolve('Task 2 done'), 500));

Promise.all([task1, task2])
  .then((results) => {
    console.log(results); // ['Task 1 done', 'Task 2 done']
  })
  .catch((error) => {
    console.error('Error:', error);
  });
