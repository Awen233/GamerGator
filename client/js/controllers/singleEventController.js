angular.module('SingleEvent').controller('SingleEventController', ['$scope', 'SingleEventFactory', 'SharedService', '$window', 
  function($scope, factory, shared, $window) {
    shared.setAuthHeader();
    $scope.model = {
      loggedIn: shared.isLoggedIn(),
      eventID: shared.getSelectedEvent(),
      owner: false,
      registered: false,
      event: {}
    };
    $scope.loadEvent= function () {
      factory.api.getEvent($scope.model.eventID).then(function(response) {
        $scope.model.event = response.data;
        $scope.model.event.date = new Date($scope.model.event.date);
        $scope.model.owner = $scope.model.event.host.username == shared.getUsername();
        $scope.model.registered = $scope.model.event.users.includes(shared.getUsername());
      }, function(error) {
        console.log('Unable to retrieve event', error);
      });
    }
    $scope.loadEvent();
    $scope.delete = function() {
      factory.api.deleteEvent($scope.model.eventID).then(function success(res) {
        $window.location.href = 'myevents.html';
      }, function error(res) {
        console.log(res);
      });
    };
  }
]);