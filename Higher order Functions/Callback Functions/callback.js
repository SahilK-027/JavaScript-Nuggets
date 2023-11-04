function sayHi(){
    return 'hi';
}
function myFunc(callback){
    return callback();
}

console.log(myFunc(sayHi));