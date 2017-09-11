angular.module('starwarsApp')
    .controller('detailsController', function($scope, $location) {

      $scope.selectShip = function() {
        $location.path('/tunning')
      }
    })
    