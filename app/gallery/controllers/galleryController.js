define(['spin'], function(Spinner) {
    'use strict';

    function galleryController($scope, $http) {
        var self = this;

        var spinOpts = {
            lines: 13 // The number of lines to draw
            , length: 28 // The length of each line
            , width: 14 // The line thickness
            , radius: 42 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.25 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // Rounds per second
            , trail: 60 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '50%' // Top position relative to parent
            , left: '50%' // Left position relative to parent
            , shadow: false // Whether to render a shadow
            , hwaccel: false // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
        };

        $scope.photos = [];

        $scope.init = function() {
            // initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            // interval between items (in milliseconds)
            var itemInterval = 5000;

            // cross-fade time (in milliseconds)
            var fadeTime = 2500;

            // count number of items
            var numberOfItems = $('.rotating-item').length;

            // set current item
            var currentItem = 0;

            // show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var inifiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if (currentItem == numberOfItems -1) {
                    currentItem = 0;
                } else {
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
            }, itemInterval);

            // Load event data
            self.startLoadingSpinner();
            $http({method: 'GET', url: 'app/gallery/controllers/photos.json'}).success(function (data) {
                if (data !== null) {
                    // For each photo
                    data.forEach(function (entry) {
                        $scope.photos.push(entry);
                    });
                    self.stopLoadingSpinner();
                }
            });
        };

        self.startLoadingSpinner = function() {
            var target = document.getElementById('gallery-loading-spinner');
            self.spinner = new Spinner(spinOpts).spin(target);
        };

        self.stopLoadingSpinner = function() {
            self.spinner.stop();
        };

        self.getAllFilesFromFolder = function (dir) {

            var fs = require('fs');

            fs.readdirSync(dir).forEach(function(file) {
                console.log(file);
            });
        };
    }

    galleryController.$inject=['$scope','$http'];

    return galleryController;
});
