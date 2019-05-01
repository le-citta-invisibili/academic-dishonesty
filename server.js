const express = require("express");
const path = require('path');
const http = require('http');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const data = require("./dist/academic-dishonesty/assets/json/features.json");

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/assets/json/features.json", function (req, res) {
  res.json(data);
});

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/academic-dishonesty')));
app.use('/images', express.static(path.join(__dirname, 'src/images')))

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/academic-dishonesty/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
