$(function() {
    function callback(data) {
        console.log(data.msg);
        if(data.result){
            console.log(data);
        }else{
            console.log('error code:'+data.error_code)
        }
    }

    //for users
    // Global.dataConn.createUser('Max','15000830489','555555',callback);  //username,mobile,password,callback
    // Global.dataConn.login('15000830489','555555',callback);  //username,mobile,password,callback
    // Global.dataConn.getUsers(callback);  //callback
    //for friends
    Global.dataConn.createFriend(2,3,'Jimmie(lover)',callback);  //fromUserID,toUserID,remarkName,callback
    // Global.dataConn.getCreateFriendMessages(1,callback);  //toUserID,callback
    // Global.dataConn.createFriendGroups(1,3,callback);  //fromUserID,toUserID,callback
    // Global.dataConn.getFriendGroups(1,callback);  //userID,callback
    // Global.dataConn.getFriends(1,3,callback);  //userID,callback
    //for messages
    // Global.dataConn.createMessage(1,3,'I am Jimmie!',callback);  //fromUserID,toUserID,message,callback
    // Global.dataConn.getMessages(1,3,callback);  //fromUserID,toUserID,callback
});