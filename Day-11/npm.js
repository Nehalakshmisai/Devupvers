const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error: ${stderr}`);
        reject(err);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

rl.question("Initialize npm? (yes/no): ", async (initAns) => {
  try {
    if (initAns.toLowerCase() === "yes") {
      console.log("Running npm init -y...");
      await runCommand("npm init -y");
    }

    rl.question("Install express? (yes/no): ", async (expressAns) => {
      if (expressAns.toLowerCase() === "yes") {
        console.log("Installing express...");
        await runCommand("npm install express");
      }

      rl.question("Install nodemon? (yes/no): ", async (nodemonAns) => {
        if (nodemonAns.toLowerCase() === "yes") {
          console.log("Installing nodemon...");
          await runCommand("npm install nodemon");
        }

        console.log("Task completed.");
        rl.close();
      });
    });
  } catch (e) {
    console.log("An error occurred.");
    rl.close();
  }
});
