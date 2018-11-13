angular.module('Register').controller('RegisterController', ['$scope', 'RegisterFactory', '$window', '$timeout', 
    function ($scope, factory, $window, $timeout) {
    	$scope.model = {
    		errorMessage: null,
    		successMessage: null
    	}
    	$scope.register = function() {
    		$scope.model.errorMessage = null;
        	$scope.model.successMessage = null;
            factory.api.register($scope.user).then(function(res) {
            	console.log(res);
            	$scope.model.successMessage = 'Success. Redirecting you to login...';
            	$timeout(function() {
            		$window.location.href = 'login.html';
            	}, 2000);
            }, function(error) {
            	console.log(error);
            	$scope.model.errorMessage = error.data.msg;
            });
        }
    }
]);