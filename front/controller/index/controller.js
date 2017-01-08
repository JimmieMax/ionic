angular.module('index.controllers', [])

    .controller('messagesCtrl', function($scope, $state) {
        $scope.onSwipeRight = function() {
            $state.go("tab.friends");
        };
        Global.dataConn.getMessages(1,3,function (data) {
            $scope.items = data.messages;
        })
    })

    .controller('findCtrl', function($scope, $state) {
        $scope.onSwipeLeft = function() {
            $state.go("tab.setting");
        };
        $scope.onSwipeRight = function() {
            $state.go("tab.friends");
        };
    });