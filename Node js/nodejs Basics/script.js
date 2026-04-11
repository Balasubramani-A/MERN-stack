//Blocking and not blocking code

//blocking code - not recommended
let fs = require('fs');
let content = fs.readFileSync('notes.txt', 'utf-8');
console.log(content);


//non-blocking code
fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Content got:', data);
    }
});