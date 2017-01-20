/**
 * Created by dustinallensworth on 6/5/16.
 */
define(['angular',
        'gallery/controllers/galleryController'], function(angular, galleryController) {
    'use strict';
    var module = angular.module('nscspApp.gallery', []);
    module.controller('galleryController', galleryController);
    return module;
});
