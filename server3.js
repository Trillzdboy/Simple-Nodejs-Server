const http = require('http');

//Create server
const server = http.createServer(function(req, res) {
    //Header
    res.writeHead(200, {'Content-Type': 'text/html'});

    //Return
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Web Page</title>
        </head>
        <body>
            <p>Valentine did this!!!</p>
        </body>
        </html>
    `);
});

//create port
server.listen(4000, '127.0.0.1');

console.log("Server is running")