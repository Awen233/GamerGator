angular.module('users').controller('loginController', ['$scope', 'users',
    function ($scope, users) {
        $scope.users = users;

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