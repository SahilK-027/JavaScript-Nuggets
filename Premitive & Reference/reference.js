/**
 * Primitive data type
 */
let num1 = 27;
let num2 = num1;
console.log(num1); // 27
console.log(num2); // 27

num1 += 10
console.log(num1) // 37
console.log(num2) // 27


let string1 = "sahil";
let string2 = string1;
console.log(string1); // sahil
console.log(string2); // sahil

string1 += "k"; 
console.log(string1); // sahilk
console.log(string2); // sahil


/**
 * Reference data type
 */
let array1 = [27];
let array2 = array1;
console.log(array1) // 27
console.log(array2) // 27

array1.push(10);
console.log(array1) // 27, 10
console.log(array2) // 27, 10


// Objects are also Reference data type