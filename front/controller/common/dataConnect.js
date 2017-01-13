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

dataConnect.prototype.createFriend= function(action,fromUserID,toUserID,remarkName,callback){
    $.ajax({
        url: '/database?do=createfriend',
        dataType:"json",
        data: {
            "action" : action,
            "fromUserID":fromUserID,
            "toUserID":toUserID,
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

dataConnect.prototype.getCreateFriendMessages= function(userID,callback){
    $.ajax({
        url: '/database?do=getcreatefriendmessage',
        dataType:"json",
        data: {
            "userID":userID
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

dataConnect.prototype.getFriends= function(userID,callback){
    $.ajax({
        url: '/database?do=getfriends',
        dataType:"json",
        data: {
            "userID":userID
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Get friends failed");
        }
    });
};

dataConnect.prototype.searchFriends= function(userID,keyword,callback){
    $.ajax({
        url: '/database?do=searchfriends',
        dataType:"json",
        data: {
            "userID":userID,
            "keyword":keyword
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Search friends failed");
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