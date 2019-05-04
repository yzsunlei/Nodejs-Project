var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function (req, res) {
    request('http://www.jikexueyuan.com/course/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            var cateWrapper = $('.aside-cList li');
            var classCate = [];

            for (var i = 0; i < cateWrapper.length; i++) {
                classCate.push(cateWrapper.eq(i).children().first().children().first().text());
            }

            res.json({
                "classNum": cateWrapper.length,
                "classCate": classCate
            })
        }
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});