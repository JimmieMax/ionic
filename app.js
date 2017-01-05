var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var database = require('./back/database.js');
var router = require('./back/route.js');

// express begin
var app = express();

//environment

//set port
app.set('port', process.env.PORT || 5555);//app port

//set template engine
app.set('views', path.join(__dirname,'/front/views'));//engine url
app.set('view engine', 'jade');//engine type

//set favicon
app.use(favicon(path.join(__dirname,'/front/images/common/favicon/favicon.ico')));//set favicon url

//set static
app.use(express.static(path.join(__dirname,'/front')));//static url

//set parse
app.use(bodyParser.urlencoded({uploadDir:path.join(__dirname,'/front/uploads'),extended: false}));//upload file url
app.use(bodyParser.json())//parser json

//set route
router.route(app);

//set database and api
app.post('/database', database.api);
app.get('/database', database.api);

//sever go on
http.createServer(app).listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});