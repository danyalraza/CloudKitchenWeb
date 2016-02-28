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

	function deleteItem(index, object) = {
		var id index;
		$http.
	}

});
