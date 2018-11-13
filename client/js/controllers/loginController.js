angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory', '$window', '$timeout', '$cookies', 
    function ($scope, factory, $window, $timeout, $cookies) {
    	$scope.model = {
    		errorMessage: null,
    		successMessage: null
    	};
        $scope.logIn = function() {
        	$scope.model.errorMessage = null;
        	$scope.model.successMessage = null;
            factory.api.logIn($scope.user).then(function(res) {
            	$scope.model.successMessage = 'Success. Redirecting you to the home page...';
            	$cookies.put('token', res.data.token);
            	$timeout(function() {
            		$window.location.href = '/';
            	}, 2000);
            }, function(error) {
            	console.log(error);
            	$scope.model.errorMessage = error.data.msg;
            });
        }
    }
]);