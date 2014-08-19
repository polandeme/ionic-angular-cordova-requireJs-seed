/*
    File: main.js
    Author: Jonathan Rowny
    Description: Loads up all the things you need to make a fun app with Angular, Ionic, and Cordova
*/
require.config({
    
    paths: {
        // cordova: '../cordova',
        angular: '../lib/ionic/js/angular/angular',
        angularAnimate: '../lib/ionic/js/angular/angular-animate',
        // angularTouch: '../lib/ionic/js/angular/angular-touch',
        angularSanitize: '../lib/ionic/js/angular/angular-sanitize',
        uiRouter: '../lib/ionic/js/angular-ui/angular-ui-router',
        ionic: '../lib/ionic/js/ionic',
        angularIonic: '../lib/ionic/js/ionic-angular',
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularAnimate' : ['angular'],
        'angularTouch' : ['angular'],
        'angularSanitize' : ['angular'],
        'uiRouter' : ['angular'],
        'ionic' :  {'exports' : 'ionic'},
        'angularIonic': ['angular', 'ionic','uiRouter', 'angularAnimate',  'angularSanitize'],
    },
    priority: [
        "angular"
    ]
});

require([
    // 'cordova',
    'ionic',
    'angular',
    'app',
    'routes'
    ], function(ionic, angular, app){
        'use strict';

        var start = function(){
            angular.bootstrap(document, [app['name']]);
        }
        start();
});
