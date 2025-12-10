const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for filename
rl.question("Enter the filename: ", (filename) => {
  const filePath = path.join(__dirname, filename);

  // Ask for content
  rl.question("Enter the text to write into the file: ", (content) => {
    // Write file
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        rl.close();
        return;
      }

      console.log("File written successfully.\n");

      // Read file
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
        } else {
          console.log("File content:", data);
        }
        rl.close();
      });
    });
  });
});
