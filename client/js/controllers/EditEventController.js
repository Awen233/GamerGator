angular.module('EditEvent').controller('EditEventController', ['$scope', 'EditEventFactory', 'SharedService', 
    function ($scope, factory, shared) {
    	shared.setAuthHeader();

   $scope.createEvent = function() {
	    $scope.event.push($scope.newEvent); 
	    
	    Events.create($scope.newEvent).then(function(err){
	      $scope.newEvent={}; 
	      
	      if(err){
	        $scope.errorMessage="Event could not be added ";
	        console.log('Not able to add event',err);
	      }
  
    });
    }; 

/*
    $scope.deleteEvent = function(index) {
       var eventID =$scope.events[index]._id; 
       $scope.events.splice(index, 1); 
       
       Listings.delete(eventID).then(function(err)
       {
         if (err){
           $scope.errorMessage="Listing could not be deleted";
           console.log ('Not able to delete the listing', err);         
         }
         
       }); 
  
       
    };
*/


    }
]);

