/**
 * Created by dustinallensworth on 6/5/16.
 */
require(['domReady', 'angular', 'app'],
function(domReady, angular, app) {
    'use strict';

    domReady(function () {
        angular.bootstrap(document, [app.name]);
    });
});
