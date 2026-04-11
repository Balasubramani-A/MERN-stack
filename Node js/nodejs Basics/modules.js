//modules

// 1. Bulit in modules
// 2. Third party modules (external modules) - npm install
// 3. Custom modules (created by us)

// 1. Built in modules
fs = require('fs');
console.log(fs);


const content = fs.readFileSync('notes.txt', 'utf-8');
console.log(content);