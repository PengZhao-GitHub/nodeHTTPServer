const fs = require('fs');
const path = require('path');

// Create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created...');
});
*/

/*
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err)
        throw err;
    else
        console.log('Folder created...');
});


// Create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'hello world!', (err) => {
    if (err)
        throw err;
    else
        console.log('file created...');
});

fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js', (err) => {
    if (err)
        throw err;
    else {
        console.log('file created...');
        //File append
        fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js', (err) => {
            if (err)
                throw err;
            else
                console.log('file created...');
        });
    }
});


// Read 
fs.readFile(path.join(__dirname, 'test','hello.txt'), 'utf8', (err, data) => {
    if (err)
        throw err;
    else
        console.log(data);
});
*/

// rename
fs.rename(path.join(__dirname, 'test','hello.txt'), path.join(__dirname, 'test','helloWorld.txt'), (err) => {
    if (err)
        throw err;
    else
        console.log('File renamed ...');
});