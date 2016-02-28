angular.module('SearchCtrl', []).controller('SearchController', function($scope, $http) {
	$http({
  method: 'GET',
  url: '/api/favourites'
}).then(function successCallback(response) {
	console.log(response.data);
	$scope.recipes = response.data;
  }, function errorCallback(response) {
    console.log(response.body);
  });

	$scope.tagline = 'Nothing beats a pocket protector!';

});
