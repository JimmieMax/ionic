var login = angular.module('login', []);
login.controller('formCtrl', function($scope) {
    $scope.loginSubmit = function() {
        Global.dataConn.login($scope.mobile,$scope.password,function(data){
            if(data.result){
                alert(data.msg);
                location = 'index';
            }
        });
    };
});