var app = angular.module('app', []);


app.controller('header', function($scope) {
    $scope.username = Global.loginUser.username;
});

app.controller('explore', function($scope) {
    $scope.username = Global.loginUser.username;
});

app.controller('messages', function($scope) {
    $scope.username = Global.loginUser.username;
});

app.controller('my', function($scope) {
    $scope.username = Global.loginUser.username;
});

app.controller('loginUser', function($scope) {
    $scope.username = Global.loginUser.username;
});

app.controller('footer', function($scope) {
    $scope.username = Global.loginUser.username;
});