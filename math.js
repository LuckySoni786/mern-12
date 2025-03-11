// ------------simple calling-----------
// sum(3,5);
// sub(5,7);
// mul(7,4);
// divide(10,5);
// modulo(34,10);

// ------------use export concept to use other things-----------
let print = require('./index1003');

// console.log("Addition"); print.sum(4,5);
// console.log("Multiply"); print.mul(4,5);
// console.log("Division"); print.divide(4,5);
// console.log("Subtraction"); print.sub(4,5);
// console.log("Modulo"); print.modulo(4,5); 
// ----object access--------
// console.log(print.obj.name);
// let obValues = print.obj;
// console.log(obValues.name)
// ----array sort with loop------
let arr = print.num;
let addition = arr.reduce((curr, prev) =>{
    let sum = curr + prev;
    return sum;
    
})

console.log(addition);



