angular.module('EditEvent').controller('EditEventController', ['$scope', 'EditEventFactory', 'SharedService', 
    function ($scope, factory, shared) {
    	shared.setAuthHeader();
    	$scope.logOut = function() {
	      shared.logOut();
	    };
    }
]);