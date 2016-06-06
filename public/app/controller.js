angular.module('CookbookCtrls', ['RecipeServices'])

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

}])
