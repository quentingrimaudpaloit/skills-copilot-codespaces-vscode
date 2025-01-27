// Create web server

// 1. Create a web server
// 2. Read the comments from the file
// 3. Display the comments on the web page

const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
  // Load the comments from the file
  fs.readFile('./comments.txt', 'utf8', (err, comments) => {
    if (err) {
      console.error('Error reading comments:', err);
      res.end('Error reading comments');
      return;
    }

    // Display the comments on the web page
    res.end(`
      <html>
        <head>
          <title>Comments</title>
        </head>
        <body>
          <h1>Comments</h1>
          <p>${comments}</p>
        </body>
      </html>
    `);
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});