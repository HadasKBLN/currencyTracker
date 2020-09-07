var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();


exports.ReadTransform = function (req, res, currency, next) {
    client.get("http://apilayer.net/api/live?access_key=51c5fcf0f7de91baa13276997577d391&currencies=" + currency, function (data) {
        // parsed response body as js object 
        next(data.quotes);
    });
}