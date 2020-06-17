/*
const person = require('./person');

console.log(person);
*/

/*
console.log('index module', __dirname, __filename);

const Person = require('./person');

const person1 = new Person('Peng', 30);

person1.greeting();

*/

/*
// Listen
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello world!');
logger.log('Hello Peng!');
logger.log('Hello Min!');
logger.log('Hello China!');
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url === '/') {

        fs.readFile(path.join(__dirname,'public', 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })

        /*
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Homepage Helloworld!<h1>');
        //res.end('<h1>Homepage Helloworld!<h1>');
        res.end();
        */
    };

    if(req.url === '/about') {

        fs.readFile(path.join(__dirname,'public', 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })

    }

    if(req.url === '/api/users') {
        const users = [
            {name: 'Bob Smith', age: 40},
            {name: 'John Doe', age: 30}
        ];

        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
        

    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


