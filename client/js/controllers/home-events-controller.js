angular.module('events').controller('HomeEventsController', ['$scope', 'Events', 
  function($scope, Events) {
    $scope.searchFields = Events.searchFields;
    $scope.model = {
      searchParams: {
        title: '',
        host: '',
        categories: {}
      },
      allEvents: [],
      shownEvents: []
    };
    // This is the only place where shown events should be set
    $scope.$watch('model', function () {
        // Filter all events using search params
        // Sort the events by most recent first
        var categories = []; // Iron the search categories dictionary out into a nice array
        for (category in $scope.model.searchParams.categories) {
          if ($scope.model.searchParams.categories[category]) {
            categories.push(category);
          }
        }
        // Start with all of the events and take away as needed
        $scope.model.shownEvents = $scope.model.allEvents
        // Check that the event contains all the search categories
        .filter(event =>
          categories.filter(category => !event.categories.includes(category)).length == 0
        )
        // Check that the event name contains the search title
        .filter(event => event.event_name.toLowerCase().includes($scope.model.searchParams.title.toLowerCase()));
        // TODO: add the rest of the conditions
      }, true);
    // Do initial loading of information
    $scope.load = function() {
      Events.api.getAll().then(function(res) {
        $scope.model.allEvents = res.data;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });
    }
    $scope.load();
    // Route to single event page on click
    $scope.eventWasClicked = function(id) {
      console.log('Event clicked with id: ' + id);
    };
  }
]);