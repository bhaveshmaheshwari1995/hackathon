'use strict';
angular.module('profileBuilder.employees', ['ngRoute'])

.controller('employeesCtrl', function($scope, $http, $location, $stateParams, appSettings, $state) {

    $http.get(appSettings.apiBase + '/list/1/100')
        .success(function(response) {
            if (response.success) {
                $scope.employees = response.data;
            } else {
              var error = new AppError(response, $scope);
              $scope.errorMessage = error.getErrorMessage();
            }
        })
        .error(function(response) {
          var error = new AppError(response, $scope);
          $scope.errorMessage = error.getErrorMessage();
        });


    $scope.goToProfile = function(id) {
        $state.go('profile', {userId: id});
    };

});

