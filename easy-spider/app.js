var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
    request('http://www.jikexueyuan.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            res.send("Hello")
        }
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});