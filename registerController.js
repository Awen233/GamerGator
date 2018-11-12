angular.module('users').controller('registerController', ['$scope', 'users',
    function ($scope, users) {
        $scope.users = users;

        $scope.addListing = function () {
            var create = {
                first_name: $scope.users.first_name,
                last_name: $scope.users.last_name,
                user_id: $scope.users.user_id,
                passWord: $scope.users.passWord,

            }
            $scope.users.push(create);
            $scope.users.first_name = '';
            $scope.users.last_name = '';
            $scope.users.user_id = '';
            $scope.users.passWord = '';
        };
    }
]);

