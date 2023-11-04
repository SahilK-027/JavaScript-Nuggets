// In JavaScript, the concept of a function returning another function is called "closure." 

function myFunc(){
    function sayHi(){
        return "hi";
    }
    return sayHi;
}

console.log(myFunc()());


/**
 * EX 2
 */
function add(a, b){
    function sum(a,b){
        return a + b;
    }
    return sum;
}

console.log(add(1,2)(1,2));  // 3
console.log(add()(1,2));   // 3
console.log(add(1,2)()); // NaN