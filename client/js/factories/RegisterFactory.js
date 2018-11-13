angular.module('Register').factory('RegisterFactory', function($http) {
	const apiBase = 'http://localhost:8080/api';
    const api = {
        register: function(user) {
            return $http.post(apiBase + '/authentication/register', user);
        }
    };
    return {
        api: api
    };
});