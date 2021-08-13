const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes.anoterHandler);
console.log(routes.someText);
server.listen(3000);