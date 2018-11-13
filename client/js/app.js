angular.module('Shared', ['ngCookies']).factory('SharedService', ['$cookies', '$http', '$window',  
	function($cookies, $http, $window) {
		return {
			setAuthHeader: function() {
		    	$http.defaults.headers.common.Authorization = $cookies.get('token');
			},
			isLoggedIn: function() {
		    	return $cookies.get('token') != undefined;
			},
			logIn: function(token) {
				$cookies.put('token', token);
				$window.location.href = '/';
			},
			logOut: function() {
				$cookies.remove('token');
				$window.location.href = 'login.html';
			},
			showEvent: function(id) {
				$cookies.put('selectedEvent', id);
				$window.location.href = 'event.html';
			},
			selectedEvent: function() {
				return $cookies.get('selectedEvent');
			}
		};
}]);

/* register the modules the application depends upon here*/
angular.module('HomeEvents', ['Shared']);
angular.module('MyEvents', ['Shared']);
angular.module('Login', ['Shared']);
angular.module('Register', ['Shared']);
angular.module('EditEvent', ['Shared']);
angular.module('SingleEvent', ['Shared']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('EventsApp', ['HomeEvents', 'MyEvents', 'Login', 'Register', 'EditEvent', 'SingleEvent']);