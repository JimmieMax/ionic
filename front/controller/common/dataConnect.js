var dataConnect =function(){}

dataConnect.prototype.createUser= function(username,mobile,password,callback){
    $.ajax({
        url: '/database?do=createuser',
        dataType:"json",
        data: {
            "username":username,
            "mobile":mobile,
            "password":password
        },
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status, error) {
            alert("Create failed");
        }
    });
}

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
}

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
}