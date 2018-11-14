angular.module('SingleEvent').factory('SingleEventFactory', function($http) {
	const apiBase = 'http://localhost:8080/api';
    const api = {
        getEvent: function(id) {
            return $http.get(apiBase + '/events/' + id);
        },
        deleteEvent: function(id) {
        	return $http.delete(apiBase + '/events/' + id);
        },
        registerFor: function(id) {
            return $http.put(apiBase + '/events/' + id + '/register');
        },
        unregisterFrom: function(id) {
            return $http.put(apiBase + '/events/' + id + '/unregister');
        },
    };
    return {
        api: api
    };
});