angular.module('Shared', ['ngCookies']).factory('SharedService', ['$cookies', '$http', '$window',  
	function($cookies, $http, $window) {
		return {
			setAuthHeader: function() {
		    	$http.defaults.headers.common.Authorization = $cookies.get('token');
			},
			isLoggedIn: function() {
		    	return $cookies.get('token') != undefined;
			},
			logIn: function(token, user) {
				$cookies.put('token', token);
				$cookies.put('user', JSON.stringify(user));
				$window.location.href = '/';
			},
			logOut: function() {
				$cookies.remove('token');
				$cookies.remove('user');
				$window.location.href = 'login.html';
			},
			showEvent: function(id) {
				$cookies.put('selectedEvent', id);
				$window.location.href = 'event.html';
			},
			getSelectedEvent: function() {
				return $cookies.get('selectedEvent');
			},
			getUser: function() {
				return JSON.parse($cookies.get('user'));
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