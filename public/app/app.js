
angular.module('CookbookApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');

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
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  })


  $locationProvider.html5Mode(true);
}])

//Controllers

.controller('HomeCtrl', ['$scope', function($scope) {
  console.log("beAnzHome")
}])

.controller('SignupCtrl', ['$scope', function($scope) {
  console.log("beAnzSignUp")
}])

.controller('LoginCtrl', ['$scope', function($scope) {
  console.log("beAnzLogin")
}])

.controller('CookbookCtrl', ['$scope', function($scope) {
  console.log("beAnzCookbook")
}])

.controller('ShowCtrl', ['$scope', function($scope) {
  console.log("beAnzShow")
}])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("beAnzSearch");

  $scope.searchTerm = '';


// THIS API FUNCTIONALITY WILL BE MOVES FROM ANGULAR TO EXPRESS
//   $scope.search = function() {

//   var req = {
//     url: "http://food2fork.com/api/search?key="+foodKey,
//     method: 'GET',
//     params: {
//       s: $scope.searchTerm,
//     }
//   }

//   $http(req).then(function success(res) {
//     //do something with the response if successful
//     console.log(res);
//   }, function error(res) {
//     //do something if the response has an error
//     console.log(res);
//   });
// }

}])



