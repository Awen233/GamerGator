angular.module('Register').controller('RegisterController', ['$scope', 'RegisterFactory',
    function ($scope, factory) {
    	$scope.register = function() {
    		console.log($scope.user);
    	};
    }
]);