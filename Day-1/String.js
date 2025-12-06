let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

let result = str1 + " " + str2;

console.log("Concatenation:", result);
console.log("Length:", result.length);
console.log("Uppercase:", result.toUpperCase());
console.log("Lowercase:", result.toLowerCase());
console.log("Substring (0,5):", result.substring(0, 5));
console.log("Includes 'Hello':", result.includes("Hello"));
console.log("Replace 'World' with 'JavaScript':", result.replace("World", "JavaScript"));
