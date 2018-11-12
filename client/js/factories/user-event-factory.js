angular.module('userevents').factory('UserEvents', function($http) {
  const apiBase = 'http://localhost:8080/api';
  const api = {
    getMy: function(user_id) {
        return $http.get(apiBase + '/users/' + user_id + '/MyEvents');
    },
  };
  return {
    api: api,
  };
});