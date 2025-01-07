const http = require('http');

// Create the server
const myserver = http.createServer((req, res) => {
    // Log the request headers to the console
    console.log(req.headers);

});

// Start the server on port 6000
myserver.listen(6010, () => {
    console.log('Server is running on port 6000');
});
