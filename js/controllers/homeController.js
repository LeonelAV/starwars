angular.module('starwarsApp')
  .controller('homeController', function($scope, $window, $rootScope, $location, apiService) {
      
    $scope.init = function () {
      $rootScope.getShips()
    }

    $scope.getDetailsById = function(shipSelected) {
      $rootScope.ship = shipSelected
      $location.path('/details')
    }
      
    $rootScope.getShips = function () {
      apiService.getShips()
        .then(function(response) {
          $rootScope.ships = response
        })
      }
    })


