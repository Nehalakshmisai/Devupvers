const fruits = ["apple", "banana", "orange", "mango"];
const [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log(firstFruit);  
console.log(secondFruit); 
console.log(otherFruits); 
const { a, b, ...restObj } = { a: 10, b: 20, c: 30, d: 40 };
console.log(restObj); 
