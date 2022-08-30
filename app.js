const http = require('http');
const os = require('os');
const fs = require('fs');
const host = '0.0.0.0';
const port = 3000;

const requestListener = function (req, res) {
    switch (req.url) {
        case "/": {
            fs.readFile( __dirname + "/index.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                console.log(os.hostname());
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end();
        });

            break;
        }
        case "/host":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(os.hostname());
            break
        
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
};
const server = http.createServer(requestListener);

server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });

