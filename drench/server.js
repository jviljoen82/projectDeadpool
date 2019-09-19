const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

app.use(express.static('css'));

let corsOptions = {
   origin: '*',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   optionsSuccessStatus: 200
};

app.use(cors());

app.get('/index.html', cors(corsOptions), (req, res, next) => {
    res.sendFile( __dirname + 'index.html' );
});

app.get('/', cors(corsOptions), (req, res, next) => {
   res.sendFile( __dirname + 'index.html' );
});

const server = app.listen(8081, 'localhost', () => {
   getBranches();
   const host = server.address().address;
   const port = server.address().port;
   console.log ('Server listening on: ' + host + ':' + port);
});