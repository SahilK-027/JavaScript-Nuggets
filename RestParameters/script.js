/* WHAT IS REST OPERATOR/PARAMETER */

// Consider a Scenario Where we don't know about the number of 
// arguments to pass in a function. 

// To handle such constraints, we can use REST Parameter

// REST Parameter is denoted by '...'

// Basically, it will create an array of the extra arguments passed.

function addNum(a,b,...args){
    var sum = 0;
    sum = a + b;
    for(let i = 0; i < args.length; i++){
        sum = sum + args[i];
    }
    return sum;
}

// Here without REST parameters, if we pass more than 2 arguments it will consider first two only.
function addNumWithoutRest(a,b){
   var sum = a + b;
   return sum;
}

const ans = addNum(1,2,3,5);
const sol = addNumWithoutRest(1,3,5,6); // Here it will print addition of first two args only and discards other arguments.

console.log(ans);
console.log(sol);

