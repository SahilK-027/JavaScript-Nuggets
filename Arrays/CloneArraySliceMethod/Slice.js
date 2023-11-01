let array1 = [27, 10, 2002];
// Method 1
// let array2 = array1.slice(0);

// Method 2
// let array2 = [].concat(array1);

// Method 3
let arr = [1000, 2000];
let array2 = [...array1, ...arr, "Few More Elements"];

console.log(array1);
console.log(array2);

array1.push(100);
console.log(array1);
console.log(array2);