angular.module('SearchCtrl', []).controller('SearchController', function($scope, $http) {
	$scope.searchRecipe = function(recipe) {
		recipe = recipe.replace(" ", "+")
		$http({
		method: 'GET',
		url: '/api/search/' + recipe
		}).then(function successCallback(response) {
		console.log(response.data);
		$scope.recipes = response.data;
		}, function errorCallback(response) {
			console.log(response.body);
		});
	}
});
