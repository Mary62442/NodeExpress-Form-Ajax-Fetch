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
    
    let html = `<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        
        <title></title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/style.css">
    </head>
    <body>
        <h2>This are the data submitted by get</h2>
        <p>${req.query.name}</p>
        <p>${req.query.surname}</p>
    
    </body>
    </html>`;
    
    res.send(html); 
});

app.post('/postdata', (req, res) => {

    let html = `<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        
        <title></title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/style.css">
    </head>
    <body>
        <h2>This are the data submitted by post</h2>
        <p>${req.body.name}</p>
        <p>${req.body.surname}</p>
    
    </body>
    </html>`;
    
    res.send(html); 

});

app.put('/putdata', (req, res) => {
    
});

app.delete('/deletedata', (req, res) => {




});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port,"Process n." ,process.pid);




