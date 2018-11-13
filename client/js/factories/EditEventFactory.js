angular.module('EditEvent').factory('EditEventFactory', function () {
	var methods = {
  	create: function(event) {
	   return $http.post('http://localhost:8081/api/events', event);
    }
    /*,
    delete: function(id) {
    	return $http.delete('http://localhost:8081/api/events', id);
    }
    */
  };
  return methods;
  }
);