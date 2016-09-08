'use strict';
angular.module('profileBuilder.profile', ['ngRoute'])

.controller('profileCtrl',
    function($scope, $http, $location, $stateParams, appSettings) {

        var userId = $stateParams.userId;

        $http.get(appSettings.apiBase + '/' + userId).success(function(response) {
            if (response.success) {
                $scope.userDetails = response.data;
            } else {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            }
        }).error(function(response) {
            var error = new AppError(response, $scope);
            $scope.errorMessage = error.getErrorMessage();
        });

    });