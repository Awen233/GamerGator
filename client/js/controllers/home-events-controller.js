angular.module('events').controller('HomeEventsController', ['$scope', 'Events', 
  function($scope, Events) {
    
    console.log('hey');

    $scope.load = function () {
      Events.get($scope.searchParams).then(function(response) {
        $scope.events = response.events;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });
    }
    $scope.load();
  }
]);