angular.module('MyEvents').factory('MyEventsFactory', function($http) {
  const apiBase = 'http://localhost:8080/api';
  const api = {
    getMyEvents: function() {
        return $http.get(apiBase + '/users/myevents');
    },
  };
  return {
    api: api,
  };
});