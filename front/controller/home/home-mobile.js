var home = angular.module('home', []);
home.controller('loginUser', function($scope) {
    $scope.username = Global.loginUser.username;
});