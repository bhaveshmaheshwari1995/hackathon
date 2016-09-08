'use strict';
angular.module('profileBuilder.OBForms', ['ngRoute'])

.controller('OBFormsCtrl', function($scope, $http, $location, $stateParams, appSettings, $state) {

    $http.get(appSettings.apiBase + '/list/1/100/Draft')
        .success(function(response) {
            if (response.success) {
                $scope.OBs = response.data;
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

