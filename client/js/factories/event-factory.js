angular.module('events', []).factory('Events', function($http) {
  const apiBase = 'http://localhost:8080/api';
  var methods = {
    getAll: function() {
        return $http.get(apiBase + '/events');
    },
    getMy: function() {

    },
    create: function(params) {
	   return $http.post('http://localhost:8080/api/listings', listing);
    }, 
    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       return $http.delete('http://localhost:8080/api/listings/' + id);
    }
  };

  return methods;
});