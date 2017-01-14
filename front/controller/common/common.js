var Global = {};

Global.controller = {};

Global.loginUser = $.cookie('user')?JSON.parse($.cookie('user').replace('j:','')):'';
console.log(Global.loginUser);

Global.dataConn = new dataConnect('');