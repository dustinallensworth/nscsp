define(['async!http://maps.google.com/maps/api/js?sensor=false'], function() {
    'use strict';

    function contactController($scope) {
        var contact = {address: {}, director: {}};
        contact.address.name = 'Youth Places';
        contact.address.street = '711 West Commons';
        contact.address.city = 'Pittsburgh';
        contact.address.state = 'PA';
        contact.address.zip = '15212';
        contact.director.name = 'Oliver Hall';
        contact.director.phone = '(412) 373-8666';
        contact.director.email = 'oliver.hall@nschildsafetyprogram.org';

        $scope.contact = contact;

        $scope.loadMap = function() {
            var map_canvas = document.getElementById('contact-map');
            var latLong = new google.maps.LatLng(40.452691, -80.007829);
            var map_options = {
                center: latLong,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(map_canvas, map_options);

            var image = 'img/mapIcon.png';
            var marker = new google.maps.Marker( {
                position: latLong,
                map: map,
                icon: image
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(latLong);
            });
        };
    }

    contactController.$inject=['$scope'];

    return contactController;
});
