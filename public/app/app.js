
angular.module('CookbookApp', ['ui.router', 'CookbookCtrls'])

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/signup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
  })
  .state('cookbook', {
    url: '/cookbook',
    templateUrl: 'app/views/cookbook.html',
    controller: 'CookbookCtrl'
  })
  .state('recipeShow', {
    url: '/cookbook/:id',
    templateUrl: 'app/views/showRecipe.html',
    controller: 'ShowCtrl'
  })
  .state('recipe-search', {
    url: '/recipe-search',
    templateUrl: 'app/views/recipe-search.html',
    controller: 'SearchCtrl'
  })
  .state('recipe-search/results', {
    url: '/recipe-search/results?:q',
    templateUrl: 'app/views/results.html',
    controller: 'ResultsController'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  })


  $locationProvider.html5Mode(true);
}])





