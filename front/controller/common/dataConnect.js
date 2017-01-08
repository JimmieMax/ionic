var dataConnect =function(){};

dataConnect.prototype.login= function(mobile,password,callback){
    $.ajax({
        url: '/database?do=login',
        dataType:"json",
        data: {
            "mobile":mobile,
            "password":password
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Login failed");
        }
    });
};

dataConnect.prototype.getUsers= function(callback){
    $.ajax({
        url: '/database?do=getusers',
        dataType:"json",
        data: {
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Get users failed");
        }
    });
};

dataConnect.prototype.createFriend= function(userID,friendID,remarkName,callback){
    $.ajax({
        url: '/database?do=createfriend',
        dataType:"json",
        data: {
            "userID":userID,
            "friendID":friendID,
            "remarkName":remarkName
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Create friend failed");
        }
    });
};

dataConnect.prototype.createMessage= function(fromUserID,toUserID,message,callback){
    $.ajax({
        url: '/database?do=createmessage',
        dataType:"json",
        data: {
            "fromUserID":fromUserID,
            "toUserID":toUserID,
            "message":message
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Create message failed");
        }
    });
};

dataConnect.prototype.getMessages= function(fromUserID,toUserID,callback){
    $.ajax({
        url: '/database?do=getmessages',
        dataType:"json",
        data: {
            "fromUserID":fromUserID,
            "toUserID":toUserID,
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Get messages failed");
        }
    });
};