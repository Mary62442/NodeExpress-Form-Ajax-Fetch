'use strict';

let http = require('http');
let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let path = require('path');
let bcrypt = require('bcrypt');

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
let ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
let app = express();

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {res.sendStatus(200); }
    else { next(); }
}


app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html')); 


});


app.get('/getdata', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/datagotten.html')); 
});

app.post('/postdata', (req, res) => {



});

app.put('/putdata', (req, res) => {



});

app.delete('/deletedata', (req, res) => {




});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port,"Process n." ,process.pid);




