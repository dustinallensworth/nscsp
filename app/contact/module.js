/**
 * Created by dustinallensworth on 6/5/16.
 */
define(['angular',
        'contact/controllers/contactController'], function(angular, contactController) {
    'use strict';
    var module = angular.module('nscspApp.contact', []);
    module.controller('contactController', contactController);
    return module;
});
