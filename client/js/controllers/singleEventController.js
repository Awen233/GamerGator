angular.module('SingleEvent').controller('SingleEventController', ['$scope', 'SingleEventFactory', 'SharedService', '$window', 
  function($scope, factory, shared, $window) {
    shared.setAuthHeader();
    $scope.loggedIn = shared.isLoggedIn();
    $scope.eventID = shared.selectedEvent();
    $scope.loadEvent= function () {
      factory.api.getEvent($scope.eventID).then(function(response) {
        $scope.event = response.data;
        $scope.event.date = new Date($scope.event.date);
      }, function(error) {
        console.log('Unable to retrieve event', error);
      });
    }
    $scope.loadEvent();
    $scope.delete = function() {
      factory.api.delete($scope.eventID).then(function success(res) {
        $window.location.href = 'myevents.html';
      }, function error(res) {
        console.log(res);
      });
    };
  }
]);