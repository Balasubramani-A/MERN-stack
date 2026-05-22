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

fs.readFile("./files/start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});