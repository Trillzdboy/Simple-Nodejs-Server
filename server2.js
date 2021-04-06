const http = require('http');

//Create server
const server = http.createServer(function(req, res) {
    //Header
    res.writeHead(200, {'Content-Type': 'application/json'});

    //Return
    res.end(`
        {
            "Name": "Agulue Chidubem Valentine",
            "Country": "Nigeria",
            "Hobby": "Web Development"
        }
    `);
});

//create port
server.listen(4000, '127.0.0.1');

console.log("Server is running")