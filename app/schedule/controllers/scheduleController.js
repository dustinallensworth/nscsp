define(['fullcalendar'], function(app) {
    'use strict';

    function scheduleController($scope, $http, fullcalendar) {
        $scope.message = 'Wed. and Fri. 6pm-7pm (private lessons at 5:30 pm)';

        $scope.loadCalendar = function() {

            var events = [];

            // Load event data
            $http({method: 'GET', url: 'app/schedule/controllers/events.json'}).success(function (data) {
                if (data !== null) {
                    // For each calendar event
                    data.forEach(function (entry) {

                        var eventDetails = {};

                        // For each property in the entry
                        for (var property in entry) {
                            // Get the value
                            var value = entry[property];

                            // If property is start or end
                            if ((property === "start") || (property === "end")) {
                                eventDetails[property] = new Date(Date.parse(value));
                            } else {
                                eventDetails[property] = value;
                            }
                        }

                        // Add event
                        events.push(eventDetails);
                    });
                }

                // Display calendar
                $('#calendar').fullCalendar({
                    editable: false,
                    events: events
                });
            });
        }
    }

    scheduleController.$inject=['$scope', '$http'];

    return scheduleController;

});
