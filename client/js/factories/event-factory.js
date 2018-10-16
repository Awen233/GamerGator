angular.module('events', []).factory('Events', function($http) {
  var methods = {
    get: function(params) {
      return {
        then: function(callback) {
            var response = {
              events: [
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              },
              {
                title: 'Title',
                date: 'Date',
                description: 'Description'
              }
            ]
          };
          callback(response);
        }
      };
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