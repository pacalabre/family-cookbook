angular.module('cookbookApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');
  console.log("beAnz")
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/signup.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/login.html'
  })
  .state('cookbook', {
    url: '/cookbook',
    templateUrl: 'app/views/cookbook.html'
  })
  .state('recipe-search', {
    url: '/recipe-search',
    templateUrl: 'app/views/recipe-search.html'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  })


  $locationProvider.html5Mode(true);
}]);

