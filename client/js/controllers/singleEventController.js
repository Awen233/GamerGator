angular.module('SingleEvent').controller('SingleEventController', ['$scope', 'SingleEventFactory', 
  function($scope, factory) {
   
  
      $scope.loadEvent= function () {
      Events.get($scope.Events[index]).then(function(response) {
        $scope.events = response.events;
      }, function(error) {
        console.log('Unable to retrieve event', error);
      });
    }
    $scope.loadEvent();

    $scope.detailedInfo = undefined;

    $scope.addEvent = function() {
      Events.create($scope.newEvent).then(
        function success(res) {
          console.log(res);
          $scope.load();
          $scope.newEvent = undefined;
        }, 
        function error(res) {
          console.log(res);
        });
    };

    $scope.deleteEvent = function(index) {
       const id = $scope.events[index]._id;
       Events.delete(id).then(
        function success(res) {
          console.log(res);
          $scope.load();
        }, 
        function error(res) {
          console.log(res);
        });
    };

}
]);