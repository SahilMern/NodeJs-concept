const highOrderFunction = (callback, a, b) => {
    return callback(a, b);  
};

const add = (a, b) => {
  return a + b;
};
const multiple = (a, b) => {
    return a + b*100;
  };

const userInput1 = 2; 
const userInput2 = 3; 

const result1 = highOrderFunction(add, userInput1, userInput2);  
const result2 = highOrderFunction(multiple, userInput1, userInput2);  
console.log(result1); //5
console.log(result2);  //302
