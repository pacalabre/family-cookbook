angular.module('cookbookApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');
  console.log("beAnz")
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.ejs'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/signup.ejs'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/login.ejs'
  })
  .state('cookbook', {
    url: '/cookbook',
    templateUrl: 'app/views/cookbook.ejs'
  })
  .state('recipe-search', {
    url: '/recipe-search',
    templateUrl: 'app/views/recipe-search.ejs'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.ejs'
  })


  $locationProvider.html5Mode(true);
}]);

