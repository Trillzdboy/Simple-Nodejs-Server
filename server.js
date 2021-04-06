const http = require('http');

//Create server
const server = http.createServer(function(req, res) {
    //Header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //Return
    res.end("Hello world");
});

//create port
server.listen(4000, '127.0.0.1');

console.log("Server is running")