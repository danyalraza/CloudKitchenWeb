angular.module('SearchCtrl', []).controller('SearchController', function($scope, $http) {


	$scope.search = function() {
		console.log("making an HTTP request");
		$http({
			method: 'GET',
			url: '/api/search/' + $scope.recipeSearch.replace(" ", "%20")
		}).then(function successCallback(response) {
		console.log(response.data);
		$scope.recipes = response.data.Results;
		}, function errorCallback(response) {
			console.log(response);
		});
	}
});
