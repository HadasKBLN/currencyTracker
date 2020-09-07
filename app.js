// https://scotch.io/tutorials/use-ejs-to-template-your-node-application

var express = require('express');
var HomeController = require('./Controllers/HomeController');
var HistoryController = require('./Controllers/HistoryController');
var TransformationController = require('./Controllers/TransformationController');
var app = express();

// view engine setup

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
 


app.use('/liveRates', HomeController.ShowAllCurrencies);

app.use('/transform', function (req, res) {
    res.render('pages/transform');
});
app.post('/currencyExchange\*', TransformationController.ShowTransform);


app.use('/history', function (req, res) {
    res.render('pages/history');
});

app.use('/subscribe', function (req, res) {
    res.render('pages//subscribe');
});


app.post('/currencyAndDates\*', HistoryController.ShowHistory);

app.use('/team', function (req, res) {
    res.render('pages/team');
});

app.use('/', function (req, res) {
    res.render('pages/about');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
