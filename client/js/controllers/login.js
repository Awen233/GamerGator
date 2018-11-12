angular.module('users').controller('registerController', ['$scope', 'users',
    function ($scope, users) {
        $scope.users = users;

        $scope.addListing = function () {
            var update = {
                user_id: $scope.newListing.user_id,
                passWord: $scope.newListing.passWord,
            }
            $scope.users.push(update);
            $scope.users.user_id = '';
            $scope.users.passWord = '';
        };
    }
]);
