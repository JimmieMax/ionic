angular.module('index.controllers', [])

    .controller('messagesCtrl', function($scope, $state) {
        $scope.onSwipeRight = function() {
            $state.go("tab.friends");
        };
        if(Global.loginUser) {
            Global.dataConn.getMessages(1,Global.loginUser.id,function (data) {
                $scope.items = data.messages;
            });
        }else{
                window.location = 'login';
        }
    })

    .controller('friendsCtrl', function($scope, $state) {
        $scope.onSwipeLeft = function() {
            $state.go("tab.messages");
        };
        $scope.onSwipeRight = function() {
            $state.go("tab.find");
        };
        if(Global.loginUser) {
            Global.dataConn.getCreateFriendMessages(Global.loginUser.id,function (data) {
                $scope.messages = data.messages;
            });
            Global.dataConn.getFriends(Global.loginUser.id,function (data) {
                $scope.friends = data.friends;
            });
        }else{
            window.location = 'login';
        }
    })

    .controller('findCtrl', function($scope, $state) {
        $scope.onSwipeLeft = function() {
            $state.go("tab.friends");
        };
        $scope.onSwipeRight = function() {
            $state.go("tab.setting");
        };
    })

    .controller('settingCtrl', function($scope, $state) {
        $scope.onSwipeLeft = function() {
            $state.go("tab.find");
        };
        if(Global.loginUser) {
            $scope.loginUser = Global.loginUser;
        }else{
            window.location = 'login';
        }
    });