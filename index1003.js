let sum = (a,b) =>{
    console.log(a + b);
    
}
let mul = (a,b) =>{
    console.log(a * b);
    
}
let divide = (a,b) =>{
    // let div = (a/b).toFixed(2);
    // console.log(div);
    
    console.log((a / b).toFixed(2));
    
}
let sub = (a,b) =>{
    console.log(a - b);
    
}
let modulo = (a,b) =>{
    return a%b;  
}

// -----------objects------------
let obj = {
    name: "lucky",
    age: 22,
    email: "soni@gmail.com"
}
let num = [4,6,3,23,12];
// module.exports = sum(4,6), mul(4,5), divide(14,6), sub(12,3), console.log(modulo(12,3)), console.log( obj.name); //simple way to print.


module.exports = {sum, mul, divide, modulo, sub, num, obj};
 

