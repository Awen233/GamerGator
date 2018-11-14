angular.module('EditEvent').controller('EditEventController', ['$scope', 'EditEventFactory', 'SharedService', '$window', '$timeout', 
    function ($scope, factory, shared, $window, $timeout) {
    	shared.setAuthHeader();
      $scope.model = {
        event: {
          host: shared.getUser().username,
          users: [
            shared.getUser().username
          ]
        },
        loggedIn: shared.isLoggedIn(),
        categories: factory.categories,
        errorMessage: null,
        successMessage: null,
        loading: false
      };
      $scope.createEvent = function() {
        $scope.model.loading = true;
        $scope.model.errorMessage = null;
        $scope.model.successMessage = null;
        var categories = []; // Iron the search categories dictionary out into a nice array
        for (category in $scope.model.event.categories) {
          if ($scope.model.event.categories[category]) {
            categories.push(category);
          }
        }
        var event = Object.assign({}, $scope.model.event);
        event.categories = categories;
        factory.api.create(event).then(function() {
          $scope.model.successMessage = 'Success. Redirecting you to the My Events page...';
          $timeout(function() {
            $window.location.href = 'myevents.html';
          }, 2000);
        }, function(err) {
          console.log(err);
          $scope.model.errorMessage = error.data.msg;
          $scope.model.loading = false;
        });
      }; 

    	$scope.logOut = function() {
	      shared.logOut();
	    };
}]);

