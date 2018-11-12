angular.module('Login').controller('LoginController', ['$scope', 'LoginFactory',
    function ($scope, factory) {

        $scope.addListing = function () {
            var update = {
                user_id: $scope.users.user_id,
                passWord: $scope.users.passWord,
            }
            $scope.users.push(update);
            $scope.users.user_id = '';
            $scope.users.passWord = '';
        };
    }
]);