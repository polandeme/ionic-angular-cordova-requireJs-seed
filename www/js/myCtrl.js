define(function() {
	return function ($scope, service) {
		$scope.words = service.words;
	}
})