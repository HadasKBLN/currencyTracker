var express = require('express');
var url = require('url');

exports.homeNext = function (data) {
    var data = { quetes: data };
    console.log(req.url);

    var p = url.parse(req.url, true);

    if (req.url.includes('graph')) {
        res.render('pages/homeWithGraph', data);
    } else {
        res.render('pages/home', data);
    }

}


