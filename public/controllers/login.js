'use strict';

angular.module('profileBuilder.login', ['ngRoute']).controller(
    'loginCtrl',
    function($rootScope, $scope, $http, $location, $routeParams, appSettings, $state) {
        $scope.authenticate = function() {
            $http.post(appSettings.apiBase + '/authenticate', $scope.login)
                .success(function(response) {
                    if (response.success) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('id', response.id);
                        localStorage.setItem('newUser', 'false');
                        $state.go('basic', {user_id: localStorage.getItem('id')});
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