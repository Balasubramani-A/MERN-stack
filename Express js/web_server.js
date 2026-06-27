const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
//Middle wares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.get(/^\/$|\/index(.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page.html', (req, res) => {
    res.redirect(301, '/new-page.html');
});

app.get(/^\/hello(\.html)?$/, (req, res, next) => {
    console.log('trying to load hello.html');
    next();
}, (req, res) => {
    res.send('Hello World!');
}); 

const one = (req, res, next) => {
    console.log('one');
    next();
}   
const two = (req, res, next) => {
    console.log('two');
    next();
}
const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

//shows how to chain middle wares together
app.get(/^\/chain(\.html)?$/, [one, two, three]);

//Middle wares
//There are 3 types
//1. Built in middle wares
//2. Third party middle wares
//3. Custom middle wares


//if user types in something that doesn't exist, send them to the 404 page
app.all(/.*/, (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});