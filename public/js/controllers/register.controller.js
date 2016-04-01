angular.module('myApp')
      .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope', '$location', 'AuthService'];

function RegisterController($scope, $location, AuthService) {

    $scope.register = function(){

      //initial values
      $scope.error = false;
      $scope.disabled = false;

      // uses var deferred = $q.defer(); from auth.service.js in this 'then' function.
      //.then only runs is deferred is resolve, .catch runs if deferred is rejected in auth.service.js
      AuthService.register($scope.registerForm.username,
                          $scope.registerForm.password)
          .then(function(response){
            $location.path('/login'); // $location can send us to other pages
            $scope.disabled = false;
            $scope.registerForm = {};
          })
          .catch(function(err){
            $scope.error = true;
            $scope.errorMessage = 'Something went wrong';
            $scope.disabled = false;
            $scope.registerForm = {};
          });
    };
};
