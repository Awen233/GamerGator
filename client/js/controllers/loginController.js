angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory',
    function ($scope, factory) {
        $scope.logIn = function() {
            console.log($scope.user);
        }
    }
]);