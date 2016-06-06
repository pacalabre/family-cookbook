angular.module('CookbookCtrls', ['RecipeServices'])

//Controllers

.controller('HomeCtrl', ['$scope', function($scope) {
  console.log("beAnzHome")
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

.controller('SignupCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      $location.path('/');
    }, function error(res) {
      console.log(data);
    });
  }
}])

.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      console.log('Token:', res.data.token)
      $location.path('/');
    }, function error(res) {
      console.log(data);
    });
  }
}])

.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    console.log('My token:', Auth.getToken());
  }
}])
