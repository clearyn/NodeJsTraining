const fs = require('fs');

const requestHandler = (req, res) => {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head>Enter Some Message</head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button action="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, ()=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>My First Page</head>');
    res.write('<body>Wow awesome</body>')
    res.write('</html>');
    res.end();
};

//Export
// module.exports = {
//     handler: requestHandler,
//     anotherText: 'Another'
// };
//OR
exports.anoterHandler = requestHandler;
exports.someText = 'some text';