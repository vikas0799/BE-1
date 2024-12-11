
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Hello, World!</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
      </html>
    `);
  } else if (url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>About</title>
      </head>
      <body>
        <h2>About Page</h2>
        <p>This is the About page.</p>
      </body>
      </html>
    `);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <h1>404 Not Found</h1>
        <p>The page you requested could not be found.</p>
      </body>
      </html>
    `);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});