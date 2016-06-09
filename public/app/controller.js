angular.module('CookbookCtrls', ['RecipeServices'])

//Controllers

.controller('HomeCtrl', ['$scope', function($scope) {
  console.log("beAnzHome")
}])


.controller('CookbookCtrl', ['$scope', '$http', 'Recipe', '$location', 'Auth',function($scope, $http, Recipe, $location, Auth) {
  // id = $index;
  $scope.Auth = Auth;
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
    // $location.path('/cookbook');
    console.log("data ="+res);
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  });
}])

.controller('ShowCtrl', ['Recipe','$stateParams','$scope','Auth','$http', function(Recipe, $stateParams, $scope, Auth, $http) {
  $scope.Auth = Auth;
  $scope.recipe = {};
  Recipe.get({id: $stateParams.id}, function success(res){
    $scope.recipe = res;
    console.log($scope.recipe);
    }, function error(err){
      console.log(err);
    })

  $scope.updateRecipe = function() {
    console.log("trying to update some pizza");
    console.log($scope.title);
    $http({
      url: '/api/recipes/$stateParams',
      method: 'PUT',
      data: {
        title: $scope.title,
        description: $scope.description,
        recipe: $scope.recipe,
        author: $scope.author
      }
    })
  }
}])


.controller('SearchCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  // console.log("beAnzSearch");
  // $scope.performRecipeSearch = function() {
  //   $state.go('recipe-search/results', {
  //     q: $scope.q
  //   });
  // };
  $scope.performRecipeSearch = function() {
    $http({
      method:'POST',
      url: '/recipe-search/results',
      data: {
        query: $scope.q
      }
    }).then(function successCallback(response) {
      console.log("Response=", response.data.conditions.recipes);
      $scope.recipes = response.data.conditions.recipes;

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("error ", response);
    });
  };
}])

.controller('ResultsController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  // console.log("results:", $stateParams, $stateParams.q);
  // queryName = $stateParams.q;
  // $http.post('/recipe-search/results', queryName)
  // .success(function(data) {
  //   console.log("data ="+ data);
  // })
  // .error(function() {
  //   console.log("bad");
  // })

  // $scope.performRecipeSearch = function() {
  //   $http({
  //     method:'POST',
  //     url: '/recipe-search/results',
  //     data: {
  //       query: $scope.q
  //     }
  //   }).then(function successCallback(response) {
  //     console.log("Response="+response);

  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     console.log("error "+ response);
  //   });
  // };

  //$scope.performRecipeSearch();
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
