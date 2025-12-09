import readline from "readline";
import { add, multiply } from "./math.mjs";
import subtract from "./math.mjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter first number: ", (first) => {
  rl.question("Enter second number: ", (second) => {
    const num1 = Number(first);
    const num2 = Number(second);

    console.log("Add:", add(num1, num2));
    console.log("Multiply:", multiply(num1, num2));
    console.log("Subtract:", subtract(num1, num2));

    rl.close();
  });
});
