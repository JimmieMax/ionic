var login = angular.module('login', []);
login.controller('formCtrl', function($scope) {
    $scope.loginSubmit = function() {
        var dataConn =new dataConnect('');
        dataConn.login($scope.mobile,$scope.password,function(data){
            if(data.result){
                location = 'index';
            }
        });
    };
});