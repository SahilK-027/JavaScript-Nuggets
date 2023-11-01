const array1 = ["1", "2", "value3"];

const [value_at_idx_1, , value_at_idx_3] = array1;
console.log(value_at_idx_1);
console.log(value_at_idx_3);



/***
 * New case
 */
let array2 = [1,2,3,4,5,6];
const [one, ...remainingArray] = array2;

console.log(one);
console.log(remainingArray);