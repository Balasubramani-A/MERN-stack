const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(path.join(__dirname, "files", "start.txt"), "utf-8");
const writeStream = fs.createWriteStream(path.join(__dirname, "files", "writeStream.txt"));

readStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
  writeStream.write(chunk);
});