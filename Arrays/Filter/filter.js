let arr = [1,3,4,12,13,6,5,2,9,7];

const isEven = (num) =>{
    return !(num & 1);
}

const evenNumbers = arr.filter(isEven);
console.log(evenNumbers);