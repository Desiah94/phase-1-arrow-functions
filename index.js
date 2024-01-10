function divide(a, b) {
    return a / b;
  }
  
  // Arrow function definition for square
  const square = (x) => {
    return x * x;
  }
  
  // Arrow function definition for add
  const add = (a, b) => {
    return a + b;
  }
  
  // Export the functions
  module.exports = {
    divide,
    square,
    add
  };