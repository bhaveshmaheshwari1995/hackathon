'use strict';

angular.module('profileBuilder.login', ['ngRoute']).controller('loginCtrl',
    function($rootScope, $scope, $http, $location, $routeParams, appSettings) {
        $scope.authenticate = function() {
            $http.post(appSettings.apiBase + '/authenticate', $scope.login)
                .success(function(response) {
                    if (response.success) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('id', response.id);
                    } else {
                        $scope.showError = response.message;
                    }
                }).error(function(response) {
                  $rootScope.errorResponse(response);
                });
        };
    });