angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory',
    function ($scope, factory) {
        const apiBase = 'http://localhost:8080/api';
        const api = {
            logIn: function(user) {
                // return $http.post(apiBase + '/users', user);
            }
        };
        return {
            api: api
        };
    }
]);