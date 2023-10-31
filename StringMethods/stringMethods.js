const string = "This is my string";

/**
 * Finding the length of a string
 */
console.log(`length: ${string.length}`); // length: 17

/**
 * Retrieving a specific string character
 */
console.log(`char at idex 5: ${string[5]}`); // char at idex 5: i

/**
 * Testing if a string contains a substring
 */

if (string.includes("This")) {
    console.log("Found This!"); 
} else {
    console.log("No This here!");
}

/**
 * Finding the position of a substring in a string
 */

console.log(string.indexOf("my")); // 8

/**
 * Extracting a substring from a string
 * You can extract a substring from a string using the slice() method.
 */

const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

/**
 * Updating parts of a string
 * You can replace one substring inside a string with another substring using the replace() method.
 */
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"