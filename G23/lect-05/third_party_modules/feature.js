function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
  let x=[2,4,5,3,7,9];
  let y=233;

//   common js syntax for exporting 
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    x,
    y
  };
