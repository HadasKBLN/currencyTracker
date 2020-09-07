var Client = require('node-rest-client').Client;
var express = require('express');


var client = new Client();


exports.ReadAllCurrencies = function (req, res, next) {
    client.get("http://apilayer.net/api/live?access_key=51c5fcf0f7de91baa13276997577d391  ", function (data, response) {
        // parsed response body as js object 
        next(data.quotes);
    });


}
//855a8fd81bed164e9fe234863a6b782c
