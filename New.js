constconst http = require('http');
const hostname = '127.0.0.1';
const port = 3005;
 
<<<<<<< Updated upstream
const camp = 8;
=======
const camp = 5;
>>>>>>> Stashed changes
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
