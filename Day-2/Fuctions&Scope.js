let userName = prompt("Enter your name:");
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
function greet(name) {
    return "Hello, " + name;
}

const add = (a, b) => a + b;

function outer() {
    let outerVar = "I am outside! (lexical scope example)";

    function inner() {
        console.log("Inner function says:", outerVar);
    }

    inner();
}
console.log(greet(userName));
console.log("Addition:", add(num1, num2));
outer();
