angular.module('myApp')
      .controller('LogoutController', LogoutController);

LogoutController.$inject = ['$scope', '$location', 'AuthService']


function LogoutController($scope, $location, AuthService) {

    $scope.logout = function () {

      // call logout from service
      // uses var deferred = $q.defer(); from auth.service.js in this 'then' function.
      //.then only runs is deferred is resolve, .catch runs if deferred is rejected in auth.service.js
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };
};
