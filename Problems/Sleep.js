// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/**
Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
*/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  // Create a new Promise object
  // In the Promise constructor, the function you provide is given two arguments: resolve and reject. These are functions provided by JavaScript itself as part of the promise implementation.
  let pr = new Promise((resolve, reject) => {
    // Inside the Promise constructor, a setTimeout function is used
    // to schedule the resolve function to be executed after 'millis' milliseconds
    setTimeout(resolve, millis);
  });
  return pr;
}
