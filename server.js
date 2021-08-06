const http = require('http');
const fs = require('fs');

// callback takes 2 argument, request and response
const server = http.createServer((req, res) => {
    // req.url brings up the url, method brings whether it is GET,POST,DELETE
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // path based on the folder structure of your html
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        // rerouting a path that is changed
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            res.end(data);
        }
    })
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hello, ello, yello</p>');
    // res.write('<p>hello, ello, yello, jello</p>');
    // res.end();
})

// server listener, takes 3 arguments, port number and host name and callback
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})