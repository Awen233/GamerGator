angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
        $scope.listings = Listings;

        $scope.addListing = function () {
            var newListingInsertion = {
                name: $scope.newListing.name,
                code: $scope.newListing.code,
                address: $scope.newListing.address,
                latitude: $scope.newListing.coordinates.latitude,
                longitude: $scope.newListing.coordinates.longitude

            }
            $scope.listings.push(newListingInsertion);
            $scope.newListing.code = '';
            $scope.newListing.name = '';
            $scope.newListing.coordinates.latitude = 0;
            $scope.newListing.coordinates.longitude = 0;
            $scope.newListing.address = '';
        };
    }
]);

