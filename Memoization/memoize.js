// Memoization is a Code Optimization technique used when working with Functions
// We can store the returned value of a function with some arguments in a Cache/Memo.
// If we pass the same arguments again, then the function will not be called again. Instead, 
// the value in the Cache will be returned thereby reducing a function call.
// However, if we pass different arguments, then we have to call the function and store the value in cache for further use.

function memoizeSquare(num){
     let memo = {};
     return function(){
      if(num in memo){
         return memo[num];
      }
      else{
      console.log("Function Call")
      memo[num] = num * num;
      return memo[num];
      }}
}

const ans = memoizeSquare(3);

console.log("1.",ans());
console.log("2.",ans());
console.log("3.",ans());
console.log("4.",ans());
