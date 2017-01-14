var utils = require('./utils.js');

exports.route = function (app) {

    app.get('/', function (req, res) {
        res.render(utils.isMobile(req)?'index-mobile.jade':'index.jade', {title:"First page"});
    });

    app.get('/index', function(req, res){
        res.render(utils.isMobile(req)?'index-mobile.jade':'index.jade', {title:"Home"});
    });

    app.get('/error', function(req, res){
        res.render('error.jade', {title:"error"});
    });

    app.get('/login', function(req, res){
        res.render(utils.isMobile(req)?'login-mobile.jade':'login.jade', {title:"Login"});
    });

    app.get('/test', function(req, res){
        res.render('test.jade', {title:"test"});
    });

    app.get('/test-mobile', function(req, res){
        res.render('index-mobile.jade', {title:"test"});
    });

    app.get('/api', function(req, res){
        res.render('api.jade', {title:"api"});
    });

    app.get('/download', function(req, res){
        res.download('front/uploads/avatars/avatar.png');
    });

};