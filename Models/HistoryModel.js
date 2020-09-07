var Client = require('node-rest-client').Client;
var express = require('express');


var client = new Client();


exports.ReadHistory = function (req, res, currency, chosenDates, next) {
    // for (var i = 0; i < chosenDates.length ; i++) 
    client.get("http://apilayer.net/api/historical?access_key=51c5fcf0f7de91baa13276997577d391&date=" + chosenDates + "&currencies=" + currency, function (data, response) {
        // parsed response body as js object
        next(data.quotes, chosenDates);
    });

}

    //צריך לקרוא לפונקציה נקסט פעם אחת בלבד, כשמה ששולחים זה מערך שכל איבר בו הוא מסוג: תאריך-ערך



