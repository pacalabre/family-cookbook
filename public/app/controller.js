angular.module('CookbookCtrls', ['RecipeServices'])

//Controllers

.controller('HomeCtrl', ['$scope', function($scope) {
  console.log("beAnzHome")
}])


.controller('CookbookCtrl', ['$scope', '$http', 'Recipe',function($scope, $http, Recipe) {
  $http.get('/api/recipes').then(function success(res) {
    //do something with the response if successful
    $scope.recipes = res.data;
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  });
 $scope.recipe = {
    title: '',
    description: '',
    image: ''
  };

  $scope.createRecipe = function() {
    console.log("trying to make some pizza");
    Recipe.save($scope.recipe, function success(data) {
      console.log(data);
      $location.path('/cookbook');
    }, function error(data) {
      console.log(data);
    });
  }
}])

.controller('newRecipeCtrl', ['$scope', function($scope) {
  console.log("beAnzNewRecipe");
  $http.post('/api/recipes',$scope.title, $scope.description, $scope.recipe).then(function success(res) {
    //do something with the response if successful
    $location.path('/cookbook');
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  });
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

// .controller('SignupCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
//   $scope.user = {
//     email: '',
//     password: ''
//   };
//   $scope.userSignup = function() {
//     $http.post('/api/users', $scope.user).then(function success(res) {
//       console.log($scope.user +" signed up");
//       $location.path('/');
//     }, function error(res) {
//       console.log(data);
//     });
//   }
// }])

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

.controller('NewCtrl', ['$scope', '$location', 'Recipe', function($scope, $location, Recipe) {
  $scope.recipe = {
    title: '',
    description: '',
    image: ''
  };

  $scope.createRecipe = function() {
    console.log("trying to make some pizza");
    Recipe.save($scope.recipe, function success(data) {
      console.log(data);
      $location.path('/cookbook');
    }, function error(data) {
      console.log(data);
    });
  }
}])
