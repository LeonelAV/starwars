angular.module('starwarsApp')
    .controller('homeController', function($scope, $window, $rootScope, $location, apiService) {
      
      $scope.init = function () {

        $rootScope.getShips()
  }
  
  
      $scope.getDetailsById = function(shipSelected) {
      $rootScope.ship = shipSelected
      console.log(shipSelected.id)
      console.log(shipSelected.name)
      

       $location.path('/details')
      }
      
      $rootScope.getShips = function () {
          console.log('this fucking button works')
          apiService.getShips()
            .then(function(response) {
              $rootScope.ships = response
              console.log(response)
            })
      }

    })


