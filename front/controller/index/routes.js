//这里声明了一个模块, 名字叫wechat.routes, 等会要在app.js中注入这个模块, 才会生效
angular.module('index.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        //如果是tab状态被激活, 加载tabs.html模板, 注意这里的abstract: true, 表示tab只有在子状态显示的时候, 它才显示, 它本身是无法主动被激活的
            .state("tab", {
                url: "/tab",
                abstract: true,
                templateUrl: "./models/common/Footer-Mobile.html"
            })
            //tab.message状态被激活,会显示tab-message.html模板, tab.message状态是在tabs.html中的ui-sref中设置的. 同时注意views中的tab-message名字, 这个也需要跟tabs.html中的ion-nav-view中的name一致哦
            .state('tab.messages', {
                url: '/messages',
                views: {
                    'tab-messages': {
                        templateUrl: './models/messages/messages-mobile.html',
                        controller:'messagesCtrl'
                    }
                }
            })
            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: './models/friends/friends-mobile.html'  ,
                        controller:'friendsCtrl'
                    }
                }
            })
            .state('tab.find', {
                url: '/find',
                views: {
                    'tab-find': {
                        templateUrl: './models/find/find-mobile.html',
                        controller:'findCtrl'
                    }
                }
            })
            .state('tab.find.self', {
                url: '/find/self',
                views: {
                    'tab-find-self': {
                        templateUrl: './models/find/find-self-mobile.html',
                        controller:'findSelfCtrl'
                    }
                }
            })
            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: './models/setting/setting-mobile.html',
                        controller:'settingCtrl'
                    }
                }
            });
        //默认状态是tab.message
        $urlRouterProvider.otherwise("/tab/messages");
    });