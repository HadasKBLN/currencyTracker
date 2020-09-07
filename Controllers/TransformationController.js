var express = require('express');
var url = require('url');
var TransformModel = require('../Models/TransformationModel');
var Client = require('node-rest-client').Client;

function parseQuery(qstr) {
    var query = {};
    qstr = qstr.substr(17);
    var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    return query;
}

exports.ShowTransform = function (req, res) {
    var coins = parseQuery(req.url);
    var sourceCurrency = "USD" + coins.sourceCurrency;
    var targetCurrency = "USD" + coins.targetCurrency;
    var temp = [];
    var SCurrency, TCurrency;

    TransformModel.ReadTransform(req, res, coins.sourceCurrency, function (data) {
        SCurrency = data[sourceCurrency];
        temp.push(SCurrency);
        if (temp.length == 2) {
            if (temp[0] == TCurrency) {
                temp[0] = SCurrency;
                temp[1] = TCurrency;
            }
            var data = { values: temp }
            res.send(data);
        }
    });

    TransformModel.ReadTransform(req, res, coins.targetCurrency, function (data) {
        TCurrency = data[targetCurrency];
        temp.push(TCurrency);
        if (temp.length == 2) {
            if (temp[0] == TCurrency) {
                temp[0] = SCurrency;
                temp[1] = TCurrency;
            }
            var data = { values: temp }
            res.send(data);
        }
    });
}