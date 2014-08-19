define(['./app'], function(app){
	'use strict';
	return app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider
			.state('home',{
				url: '/welcome',
				templateUrl: 'templates/welcome.html'
			});

        $urlRouterProvider.otherwise('/welcome');
	});
});
