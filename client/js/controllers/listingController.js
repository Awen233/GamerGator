angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    $scope.load = function () {
      Listings.getAll().then(function(response) {
        $scope.listings = response.data;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });
    }
    $scope.load();

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
      Listings.create($scope.newListing).then(
        function success(res) {
          console.log(res);
          $scope.load();
          $scope.newListing = undefined;
        }, 
        function error(res) {
          console.log(res);
        });
    };

    $scope.deleteListing = function(index) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
       const id = $scope.listings[index]._id;
       Listings.delete(id).then(
        function success(res) {
          console.log(res);
          $scope.load();
        }, 
        function error(res) {
          console.log(res);
        });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);