//modules

// 1. Bulit in modules
// 2. Third party modules (external modules) - npm install
// 3. Custom modules (created by us)

// 1. Built in modules
fs = require('fs');
// console.log(fs);


const content = fs.readFileSync('notes.txt', 'utf-8');
//sync means it is a blocking operation 
// console.log(content);


fs.writeFileSync('copy.txt', 'This is a new note', 'utf-8');

fs.writeFileSync('copy.txt', 'This is an updated note', 'utf-8'); //overwrites the content of the file
fs.appendFileSync('copy.txt', '\nThis is an appended note', 'utf-8'); //appends the content to the file 

fs.mkdirSync('games/xyz', {recursive: true}); //creates a directory and its parent directories if they do not exist
fs.rmdirSync('games/xyz'); //removes the directory

fs.unlinkSync('copy.txt'); //removes the file