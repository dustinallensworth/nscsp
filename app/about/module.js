/**
 * Created by dustinallensworth on 6/5/16.
 */
define(['angular',
        'about/controllers/aboutController'], function(angular, aboutController) {
    'use strict';
    var module = angular.module('nscspApp.about', []);
    module.controller('aboutController', aboutController);
    return module;
});
