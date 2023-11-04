// Sort method works based on ASCII characters

let names = ['abc', 'aab', 'pqr', 'zyx', 'xyz'];
names.sort();
console.log(names);

// Though we have numbers array it will still consider it as string
let nums= [300,221,421,55,7,11,8];
nums.sort();
console.log(nums)

// To sort based on numeric value we need to provide custom comparator
const comparator =  (a, b) => {
    return a - b;
}
let arr = [300,221,421,55,7,11,8];
arr.sort(comparator);
console.log(arr)