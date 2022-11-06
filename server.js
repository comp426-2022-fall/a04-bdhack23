// Require express module
const http = require('express');

// Require minimist module
const args = require('minimist')(process.argv.slice(2));

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
args["port"];

// Define a const `port` using the argument from the command line. 
// Make this const default to port 5000 if there is no argument given for `--port`.
const port = args.port || process.env.PORT || 5000;

// The app shall be express
const app = express()

// Make endpoint at /app/ return "200 OK"
app.get('/app/', (req,res) => {
  res.send("200 OK").end()
})

