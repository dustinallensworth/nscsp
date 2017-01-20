define([], function() {
    'use strict';

    function homeController($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome to the NorthSide Child Safety Program Website!';
    }

    homeController.$inject=['$scope'];

    return homeController;
});
