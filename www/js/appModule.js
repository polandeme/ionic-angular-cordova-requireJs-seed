define([
	'angular',
	'myService',
	'myCtrl'], function (angular, myService, myCtrl) {
		var appModule = angular.module('appModule', []);
			appModule.factory('myService', myService);
			appModule.controller('myCtrl', ['$scope', 'myService',myCtrl]);
		return appModule;
	})