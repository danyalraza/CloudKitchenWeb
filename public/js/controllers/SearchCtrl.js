angular.module('SearchCtrl', []).controller('SearchController', function($scope, $http) {
	$scope.recipes = {};
	$scope.addtoFavourites = function(recipe) {
		console.log(recipe);
		$http({
			method: 'POST',
			url: '/api/favourites/',
			data: recipe
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	}

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
