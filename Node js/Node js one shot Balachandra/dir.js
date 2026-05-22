const fs = require("fs");
const path = require("path");

if(!fs.existsSync(path.join(__dirname, "./newDir"))) {
    fs.mkdir(path.join(__dirname, "./newDir"), (err) => {
    if (err) {
        console.error("Error creating directory:", err);
        return;
    }
    console.log("Directory created successfully");
    });
} 

if(fs.existsSync(path.join(__dirname, "./newDir"))) {
    fs.rmdir(path.join(__dirname, "./newDir"), (err) => {
    if (err) {
        console.error("Error creating directory:", err);
        return;
    }
    console.log("Directory created successfully");
    });
} 
//Exit an uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Exit the process with a non-zero code to indicate an error
});