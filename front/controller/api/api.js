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
    // Global.dataConn.createFriend('request',2,3,'Jimmie(lover)',callback);  //action,fromUserID,toUserID,remarkName,callback
    // Global.dataConn.createFriend('accept',3,2,'Jane(lover)',callback);  //action,fromUserID,toUserID,remarkName,callback
    // Global.dataConn.getCreateFriendMessages(1,callback);  //toUserID,callback
    // Global.dataConn.createFriendGroups(1,3,callback);  //fromUserID,toUserID,callback
    // Global.dataConn.getFriendGroups(1,callback);  //userID,callback
    // Global.dataConn.getFriends(2,callback);  //userID,callback
    // Global.dataConn.searchFriends(2,'lover',callback);  //userID,keyword,callback
    //for messages
    // Global.dataConn.createMessage(1,3,'I am Jimmie!',callback);  //fromUserID,toUserID,message,callback
    Global.dataConn.getMessages(
        'someone',
        {friendID : 1},
        3,
        callback
    );  //condition,data,userID,callback
    Global.dataConn.getMessages(
        'friends',
        {},
        3,
        callback
    );  //condition,data,userID,callback
    // Global.dataConn.searchMessages(1,'Hello',callback);  //userID,keyword,callback
    //for articles
    // Global.dataConn.getArticles(1,callback);  //userID,pageNum,offset,callback
    // Global.dataConn.searchArticles(1,'J',callback);  //userID,keyword,callback
    //for comments
    // Global.dataConn.createComment(1,0,2,'666',callback);  //articleID,commentID,userID,comment,callback

});