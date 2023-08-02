// ? UseCase 1
/**
 * Array spreading
 * @brief You can use the spread operator to create a new array by expanding elements from an existing array or combine multiple arrays into one.
 */
const arr1 = [1,2,3];
const arr2 = [5,6,7,8,9];

const concatArr = [...arr1, ...arr2];
console.log(concatArr);


// ? UseCase 2
/**
 * Object Spreading
 * @brief You can also use the spread operator to create a new object by copying properties from an existing object or merge multiple objects into one.
 */

const obj1 = {
    name: "sk",
    age: 21
}
const obj2 = {
    city: "pune",
    dob: "27/10/2002"
}

const concatObj = {...obj1, ...obj2};
console.log(concatObj)



// ? UseCase 3
/**
 * Function arguments
 * @brief The spread operator can be used in function arguments to pass elements of an array as individual arguments to a function.
 */

const arr = [1,2,3,4,5,6];
console.log(Math.max(...arr));





// ? UseCase 4
/**
 * Function parameters
 * @brief The spread operator can be used in function parameters to gather multiple arguments into an array.
 */
const getRandomLuckyNum = (...array)=>{
    const randomLuckyIdx = Math.floor(Math.random() * array.length)
    return array[randomLuckyIdx];
}

console.log(getRandomLuckyNum(1,2,5,2,3,7,8));



// ? UseCase 5
/**
 * Iterables
 * @brief The spread operator can be used to convert iterables (e.g., strings, sets, maps) into arrays.
 */

const str = "HelloWorld!";
const set = new Set().add(1).add(2).add(3);
const set2 = new Set();
set2.add([...Array(10).keys()].slice(1));
console.log(set)
console.log(set2)


const charArray = [...str];
console.log(charArray);

const setArray = [...set2];
console.log(setArray);


// ? UseCase 6
/**
 * Clone Arrays and Objects (Shallow copy) 
 * @brief The spread operator can be used to create shallow copies of arrays and objects.
 */

const originalArray = [1,2,3,4,5];
const clonedArray = [...originalArray];
clonedArray[4] = 100;
console.log(originalArray);
console.log(clonedArray);