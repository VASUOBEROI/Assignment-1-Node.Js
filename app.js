const http=require('http'); // Importing Node Core Module: http.

const routes=require('./routes'); // Importing Exports from routes.js file.

const server=http.createServer(routes.RouteHandler);

server.listen(3000); // Server Listening on Port 3000

