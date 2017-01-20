/**
 * Created by dustinallensworth on 4/18/14.
 */
define(['angular',
        'ngRoute',
        'about/module',
        'contact/module',
        'gallery/module',
        'home/module',
        'schedule/module'],
    function(angular, ngRoute) {
        'use strict';

        return angular.module('nscspApp', ['ngRoute',
            'nscspApp.about',
            'nscspApp.contact',
            'nscspApp.gallery',
            'nscspApp.home',
            'nscspApp.schedule'
        ]).config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'app/home/views',
                    controller  : 'homeController'
                })
                .when('/about', {
                    templateUrl : 'app/about/views',
                    controller  : 'aboutController'
                })
                .when('/contact', {
                    templateUrl : 'app/contact/views',
                    controller  : 'contactController'
                })
                .when('/gallery', {
                    templateUrl : 'app/gallery/views',
                    controller  : 'galleryController'
                })
                .when('/schedule', {
                    templateUrl: 'app/schedule/views',
                    controller: 'scheduleController'
                });
        }]);
});
