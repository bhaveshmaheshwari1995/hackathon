'use strict';

angular.module('profileBuilder.newEmployee', ['ngRoute']).controller(
    'newEmployeeCtrl',
    function($rootScope, $scope, $http, $location, $routeParams, appSettings, $state) {
        $scope.authenticate = function() {
            $http.post(appSettings.apiBase + '/OBauthenticate', {OBcode:$scope.OBCode})
                .success(function(response) {
                    if (response.success) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('id', response.id);
                        localStorage.setItem('newUser', 'true');
                        $state.go('FBConnect', {user_id: localStorage.getItem('id')});
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }
                }).error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };
        $scope.goToPreviousPage = function() {
          $state.go('login');
        }
    });