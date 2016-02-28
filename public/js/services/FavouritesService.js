angular.module('FavouritesService', []).factory('Favourites', ['$http', function($http) {
  return {
    get : function() {
      return $http.get('/api/favourites');
    },
    create : function() {
      return $http.post('/api/favourites', FavouriteData);
    },
    delete : function() {
      return $http.delete('/api/favourites/' + id);
    }
  }
}]);
