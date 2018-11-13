angular.module('Login').factory('LoginFactory', function($http) {
	const apiBase = 'http://localhost:8080/api';
    const api = {
        logIn: function(user) {
            return $http.post(apiBase + '/authentication', user);
        }
    };
    return {
        api: api
    };
});