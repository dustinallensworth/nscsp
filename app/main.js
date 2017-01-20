/**
 * Created by dustinallensworth on 6/4/16.
 */
require.config({
    // alias libraries path
    paths: {
        'domReady'    : 'bower_components/domReady/domReady',
        'jquery'      : 'bower_components/jquery/dist/jquery.min',
        'angular'     : 'bower_components/angular/angular',
        'ngRoute'     : 'bower_components/angular-route/angular-route',
        'moment'      : 'bower_components/moment/min/moment.min',
        'fullcalendar': 'bower_components/fullcalendar/dist/fullcalendar.min',
        'google-maps' : 'bower_components/google-maps/lib/Google.min',
        'async'       : 'bower_components/requirejs-plugins/src/async',
        'underscore'  : 'bower_components/underscore/underscore-min',
        'spin'        : 'bower_components/spin.js/spin'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'jquery' : { exports: '$'},
        'angular': { exports: 'angular', deps: ['jquery'] },
        'ngRoute': { exports: 'ngRoute', deps: ['angular'] },
        'underscore' : { exports: '_' },
        'spin': { exports: 'spin'}
    },

    // kick start application
    deps: ['./bootstrap']
});
