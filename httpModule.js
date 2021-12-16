const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if(req.url == "/"){
    res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/html');
    res.end('<h1> hello world </h1>');
    }
    else if (req.url == "/html") {
        res.statusCode = 200;
        // res.setHeader = ('Content-type', 'text/html');
        let data=fs.readFileSync("./index.html");
        res.end(data.toString());

    }
    else{
        res.statusCode = 404;
        res.setHeader = ('Content-type', 'text/html');
    res.end('<h1> 404! result not there </h1>');


    }

})
server.listen(port, () => console.log("started"));
// console.log(port);