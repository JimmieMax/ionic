var mysql = require('mysql');
var utils = require('./utils.js');

var dbConnect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'cooller',
    database:'node',
    port: 3306,
    charset:'UTF8MB4_GENERAL_CI',//for the emoji
    multipleStatements: true
});
dbConnect.on('error', function (err) {
    console.log(err.code);
});

function createUser(req,res){
    console.log("createUser here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var create_user_sql = 'INSERT users SET username='+mysql.escape(obj.username)+',mobile='+mysql.escape(obj.mobile)+',password='+mysql.escape(obj.password);
    console.log(create_user_sql);

    dbConnect.query(create_user_sql,function(err,results){
        if (err) throw err;
        resObj.msg = 'Create user successfully';
        res.send(resObj);
    })
}

function login(req,res){
    console.log("login here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var login_sql = 'SELECT * FROM users WHERE mobile='+mysql.escape(obj.mobile)+' AND password='+mysql.escape(obj.password);
    console.log(login_sql);

    dbConnect.query(login_sql,function(err,results){
        if (err) throw err;
        if(results.length==0){
            resObj.result = false;
            resObj.msg = 'Mobile or password was incorrect！';
        }else{
            resObj.user = results[0];
            resObj.msg = 'Login successfully';
            delete resObj.user.password;
            res.cookie('user', resObj.user, { maxAge: 60*60*1000 });
        }
        res.send(resObj);
    })
}

function getUsers(req,res){
    console.log("getUsers here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var get_users_sql = 'SELECT * FROM users';
    console.log(get_users_sql);

    dbConnect.query(get_users_sql,function(err,results){
        if (err) throw err;
        resObj.msg = 'Get users successfully';
        resObj.users = results;
        res.send(resObj);
    })
}

function createFriend(req,res){
    console.log("createFriend here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var create_friend_sql = 'INSERT friends'+
        ' SET userID='+obj.userID+',friendID='+obj.friendID+',remarkName='+mysql.escape(obj.remarkName)+',createTime='+utils.getDateIntSecs();
    console.log(create_friend_sql);

    dbConnect.query(create_friend_sql,function(err,results){
        if (err) throw err;
        resObj.msg = 'Create friend successfully';
        res.send(resObj);
    })
}

function createMessage(req,res){
    console.log("createMessage here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var create_message_sql = 'INSERT messages'+
        ' SET fromUserID='+obj.fromUserID+',toUserID='+obj.toUserID+',message='+mysql.escape(obj.message)+',createTime='+utils.getDateIntSecs();
    console.log(create_message_sql);

    dbConnect.query(create_message_sql,function(err,results){
        if (err) throw err;
        resObj.msg = 'Create message successfully';
        res.send(resObj);
    })
}

function getMessages(req,res){
    console.log("getMessages here");

    var obj = req.query.data;
    var resObj ={"msg":"","result":true,"token":"","error_code":"0"};

    var get_users_sql = 'SELECT *'+
        ' FROM messages'+
        ' WHERE fromUserID='+obj.fromUserID+' AND toUserID='+obj.toUserID+' AND seen=0';
    console.log(get_users_sql);

    dbConnect.query(get_users_sql,function(err,results){
        if (err) throw err;
        resObj.msg = 'Get messages successfully';
        resObj.messages = results;
        res.send(resObj);
    })
}


exports.api = function(req, res){

    utils.jsonStringToObject(req);

    switch (req.query.do){
        //for users
        case "createuser" : createUser(req,res);
            break;
        case "login" : login(req,res);
            break;
        case "getusers" : getUsers(req,res);
            break;
        //for friends
        case "createfriend" : createFriend(req,res);
            break;
        //for messages
        case "createmessage" : createMessage(req,res);
            break;
        case "getmessages" : getMessages(req,res);
            break;
        default:
            console.log('Do nothing');
    }

};