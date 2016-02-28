angular.module('FavouritesCtrl', []).controller('FavouritesController', function($scope, $http) {
	$http({
  method: 'GET',
  url: '/api/favourites'
}).then(function successCallback(response) {
	console.log(response.data);
	$scope.recipes = response.data;
  }, function errorCallback(response) {
    console.log(response.body);
  });

	$scope.deleteItem = function(recipeID) {
		console.log("Trying to delete ID " + recipeID);
		$http.delete('/api/favourites/' + recipeID).then(function successCallback(response) {
			console.log(response.data);
			// $scope.recipes.splice()
		}, function errorCallback(response) {
			console.log(response.body);
		})
	}
});
