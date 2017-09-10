angular.module('starwarsApp')
    .controller('homeController', function($scope, $location, apiService) {

      $scope.getDetailsById = function(id) {
        $location.path('/details')
       var idShip = $scope.idShipSelected
       console.log(idShip)
      }
      
      $scope.getShips = function () {
     console.log('this fucking button works')
    apiService.getShips()
    .then(function(response) {
      $scope.ships = response
  	    console.log(response)
  	  })
  }
     
    })
