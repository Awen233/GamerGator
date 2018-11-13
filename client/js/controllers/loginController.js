angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory', '$timeout', 'SharedService', 
    function ($scope, factory, $timeout, shared) {
    	$scope.model = {
            user: {},
    		errorMessage: null,
    		successMessage: null,
            loading: false
    	};
        $scope.logIn = function() {
            $scope.model.loading = true;
        	$scope.model.errorMessage = null;
        	$scope.model.successMessage = null;
            factory.api.logIn($scope.model.user).then(function(res) {
            	$scope.model.successMessage = 'Success. Redirecting you to the home page...';
            	$timeout(function() {
            		shared.logIn(res.data.token, res.data.user);
            	}, 2000);
            }, function(error) {
            	console.log(error);
            	$scope.model.errorMessage = error.data.msg;
                $scope.model.loading = false;
            });
        }
    }
]);