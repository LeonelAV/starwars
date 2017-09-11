angular.module('starwarsApp')
  .factory('apiService', function($http){
    
    function getShips() {
      // var urlSearchBeer = 'http://swapi.co/api/starships/?format=json' 
      var urlSearchBeer = 'data/ships.json'
      return $http.get(urlSearchBeer)
        .then(response => response.data.results)
    }

    return {
      getShips: getShips
    }
})