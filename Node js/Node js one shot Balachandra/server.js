// console.log("Hello World");
// console.log(global);

// const os = require("os");
// const path = require("path");
// const math = require("./math");



// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));

//arithmetic operations
// console.log(math.add(2, 3));
// console.log(math.subtract(5, 2));
// console.log(math.multiply(4, 6));
// console.log(math.divide(10, 2));

const fs = require("fs");

// Reading a file asynchronously
fs.readFile("./files/start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

//Exit an uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Exit the process with a non-zero code to indicate an error
});
