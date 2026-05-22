// console.log("Hello World");
// console.log(global);

// const os = require("os");
const path = require("path");
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

// const fs = require("fs");
const fsPromises = require("fs").promises;

// Reading a file asynchronously
// fs.readFile(path.join(__dirname, 'files', 'start.txt'), "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });

// //Exit an uncaught exception
// process.on("uncaughtException", (err) => {
//   console.error("Uncaught Exception:", err);
//   process.exit(1); // Exit the process with a non-zero code to indicate an error
// });

// fs.writeFile(path.join(__dirname, 'files', 'content.txt'), "Hello World, happy earning", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully");
// });

// fs.appendFile(path.join(__dirname, 'files', 'content.txt'), "\nWelcome to Node.js", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log("File appended successfully");
// fs.rename(path.join(__dirname, 'files', 'content.txt'), path.join(__dirname, 'files', 'newContent.txt'), (err) => {
//     if (err) {
//         console.error("Error renaming file:", err);
//         return;
//     }
//     console.log("File renamed successfully");
//     });
// });


const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "start.txt"), "utf-8");            
    console.log("File contents:", data);
    await fsPromises.writeFile(path.join(__dirname, "files", "content.txt"), "Hello World, happy learning");
    console.log("File written successfully");   
    await fsPromises.appendFile(path.join(__dirname, "files", "content.txt"), "\nWelcome to Node.js learning");
    console.log("File appended successfully");
    await fsPromises.rename(path.join(__dirname, "files", "content.txt"), path.join(__dirname, "files", "newContent.txt"));
    console.log("File renamed successfully");
  } catch (err) {
    console.error("Error:", err);
  } 
};

fileOps();