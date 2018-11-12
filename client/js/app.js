/* register the modules the application depends upon here*/
angular.module('HomeEvents', ['ngCookies']);
angular.module('MyEvents', ['ngCookies']);
angular.module('Login', ['ngCookies']);
angular.module('Register', ['ngCookies']);
angular.module('EditEvent', ['ngCookies']);
angular.module('SingleEvent', ['ngCookies']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('EventsApp', ['HomeEvents', 'MyEvents', 'Login', 'Register', 'EditEvent', 'SingleEvent']);