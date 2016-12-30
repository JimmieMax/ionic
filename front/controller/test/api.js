$(function() {
    function callback(data) {
        console.log(data.msg);
        if(data.result){
            console.log(data);
        }else{
            console.log('error code:'+data.error_code)
        }
    }
    var dataConn =new dataConnect('');

    //for users
    dataConn.createUser('Max','15000830489','555555',callback);  //username,mobile,password,callback
    // dataConn.login('15000830489','555555',callback);  //username,mobile,password,callback
    // dataConn.getUsers(callback);  //callback
})