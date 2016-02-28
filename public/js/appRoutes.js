angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/favourites', {
			templateUrl: 'views/favourites.html',
			controller: 'FavouritesController'
		})

		.when('/search/:id', {
			templateUrl: 'views/search.html',
			controller: 'SearchController'
		});

	$locationProvider.html5Mode(true);

}]);
