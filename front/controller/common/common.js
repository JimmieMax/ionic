var Global = {};

Global.loginUser=JSON.parse($.cookie('user').replace('j:',''));
console.log(Global.loginUser);