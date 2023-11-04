// Normal function
// function isEven(num){
//     return num % 2 === 0;
// }



// Function expression
// const isEven = function(num){
//     return num % 2 === 0;
// }



// Arrow function
// const isEven = (num) => {
//     return num % 2 === 0;
// }

// But if arrow function is taking only one argument
// then we  can drop '()' 
// const isEven = num => {
//     return num % 2 === 0;
// }

// If arrow function is only having one line returning something then
// we can write function as below
const isEven = num => num % 2 === 0;


// invoke
console.log(isEven(2))