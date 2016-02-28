angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/search.html',
			controller: 'SearchController'
		})

		.when('/favourites', {
			templateUrl: 'views/favourites.html',
			controller: 'FavouritesController'
		})

	$locationProvider.html5Mode(true);

}]);
