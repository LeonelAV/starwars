angular.module('starwarsApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller:'homeController'
      })
      .when('/details', {
        templateUrl: 'templates/details.html',
        controller:'detailsController'
      })
      .when('/tunning', {
        templateUrl: 'templates/tunning.html'
      })
      
  })