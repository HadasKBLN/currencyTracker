var express = require('express');
var url = require('url');
var HistoryModel = require('../Models/HistoryModel');
var Client = require('node-rest-client').Client;

//להעביר לדף של גבה סקרריפט אחר
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

//להעביר לדף אחר של גבה
function DatesChoosing(startDate, endDate) {
    var start = startDate.split("-");
    var end = endDate.split("-");

    var startDateForm = new Date(start[0], (start[1] - 1), start[2], 7);
    var endDateForm = new Date(end[0], (end[1] - 1), end[2], 7);
    var dates = new Array();
    dates = datesArray(startDateForm, endDateForm);
    return dates;
}


//this function gets two dates and return an array with 10 dates maximum
function datesArray(startDate, endDate) {
    var oneDay = 24 * 60 * 60 * 1000;
    var numOfDays = ((endDate - startDate) / oneDay) + 1;  //inculing the start and the end days
    var arr = new Array();
    if (numOfDays <= 10) {
        var tmp = new Date(startDate);
        arr[0] = changeDateFormat(tmp);
        for (var i = 1; tmp.getTime() < endDate.getTime(); i++) { //insert all the days to the array
            tmp = new Date(tmp.getTime() + oneDay);
            arr[i] = changeDateFormat(tmp);
        }
    }
    else {
        var average = (endDate.getTime() - startDate.getTime()) / (oneDay * 10); //how many milisec we jump between the dates
        var tmp = new Date(startDate);
        arr[0] = changeDateFormat(tmp);
        for (var i = 1; tmp.getTime() < endDate.getTime(); i++) { //insert all the days to the array
            tmp = new Date((tmp.getTime() + average * oneDay));
            arr[i] = changeDateFormat(tmp);
        }
    }
    return arr;
}

//this function changing the format of the recieving date to yyyy-mm-dd format
function changeDateFormat(date) {
    var year = new Date(date).getFullYear();
    var month = new Date(date).getMonth() + 1;
    var day = new Date(date).getDate();
    var monthString = month.toString().length == 2 ? month.toString() : ('0' + month.toString());
    var dayString = day.toString().length == 2 ? day.toString() : ('0' + day.toString());
    var str = year.toString() + '-' + monthString + '-' + dayString;
    return str;
}



exports.ShowHistory = function (req, res) {
    var currencyAndDates = parseQuery(req.url);
    var chosenDates = DatesChoosing(currencyAndDates["startDate"], currencyAndDates["endDate"]);
    var temp = [];
    for (var i = 0; i < chosenDates.length; i++) {
        var date = chosenDates[i];
        HistoryModel.ReadHistory(req, res, currencyAndDates.currency, date, function (data, chosenDate) {
            var currencyName = "USD" + currencyAndDates["currency"];
            var currencyValue = {};
            currencyValue.date = chosenDate;
            currencyValue.value = data[currencyName];
            temp.push(currencyValue);
            if (temp.length == chosenDates.length) {
                temp.sort(function (value1, value2) {
                    var tmp = value1.date.split("-");
                    var date1 = new Date(tmp[0], tmp[1], tmp[2], 7);
                    tmp = value2.date.split("-");
                    var date2 = new Date(tmp[0], tmp[1], tmp[2], 7);
                    return (date1.getTime() - date2.getTime());
                });
                var data = { values: temp }
                res.send(data);
            }

        });

    }
}






