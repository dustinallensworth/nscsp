/**
 * Created by dustinallensworth on 6/5/16.
 */
define(['angular',
        'home/controllers/homeController'], function(angular, homeController) {
    'use strict';
    var module = angular.module('nscspApp.home', []);
    module.controller('homeController', homeController);
    return module;
});
