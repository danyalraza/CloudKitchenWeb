angular.module('SearchService', []).factory('Search', ['$http', function($http) {
	return {
		get: function(searchQuery) {
			return $http.get('/api/search/' + searchQuery);
		}
	}
}]);
