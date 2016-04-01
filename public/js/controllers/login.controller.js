angular.module('myApp')
      .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$location', 'AuthService'];

function LoginController($scope, $location, AuthService) {

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // uses var deferred = $q.defer(); from auth.service.js in this 'then' function.
      //.then only runs is deferred is resolve, .catch runs if deferred is rejected in auth.service.js
      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

      };
};
