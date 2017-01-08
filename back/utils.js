
function getDateIntSecs() {
    var date = new Date();
    var time = parseInt(date.getTime()/1000);
    return time;
}

function isJSON(obj){
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

function moveBodyToData(dest,src){
    for (var key in src){
        dest[key] = src[key];
    }
    return dest;
}

function jsonStringToObject(req){

    if(req.query.data&&!isJSON(req.query.data)){
        req.query.data = JSON.parse(req.query.data);
    }

    if(req.body){
        if(req.query.data==undefined){
            req.query.data = {};
        }
        if(req.body.data){
            req.query.data = moveBodyToData(req.query.data,req.body.data);
        }
        else{
            req.query.data = moveBodyToData(req.query.data,req.body);
        }
    }
}

function isMobile(req) {
    var deviceAgent = req.headers['user-agent'].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/); //is mobile
    if(agentID){
        return true;
    }else{
        return false;
    }

}

exports.getDateIntSecs = getDateIntSecs;
exports.jsonStringToObject = jsonStringToObject;
exports.isMobile = isMobile;