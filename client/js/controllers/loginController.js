angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory', '$timeout', 'SharedService', 
    function ($scope, factory, $timeout, shared) {
    	$scope.model = {
    		errorMessage: null,
    		successMessage: null
    	};
        $scope.logIn = function() {
        	$scope.model.errorMessage = null;
        	$scope.model.successMessage = null;
            factory.api.logIn($scope.user).then(function(res) {
            	$scope.model.successMessage = 'Success. Redirecting you to the home page...';
            	$timeout(function() {
            		shared.logIn(res.data.token, res.data.user);
            	}, 2000);
            }, function(error) {
            	console.log(error);
            	$scope.model.errorMessage = error.data.msg;
            });
        }
    }
]);