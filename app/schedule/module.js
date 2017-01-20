/**
 * Created by dustinallensworth on 6/5/16.
 */
define(['angular',
        'schedule/controllers/scheduleController'], function(angular, scheduleController) {
    'use strict';
    var module = angular.module('nscspApp.schedule', []);
    module.controller('scheduleController', scheduleController);
    return module;
});
