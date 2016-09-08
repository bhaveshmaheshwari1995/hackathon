'use strict';

angular.module('profileBuilder.genOBCode', ['ngRoute']).controller(
    'genOBCodeCtrl',
    function($rootScope, $scope, $http, $location, $routeParams, appSettings, $state) {
        $scope.authenticate = function() {
            $http.post(appSettings.apiHrBase + '/createOBcode', {numberOfItems: $scope.OBCount})
                .success(function(response) {
                    if (response.success) {
                      $scope.OBCodes = response.OBcodes;
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }
                }).error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };
    });