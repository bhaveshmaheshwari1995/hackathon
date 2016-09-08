'use strict';
angular.module('profileBuilder.passportDetails', ['ngRoute'])
    .controller('passportDetailsCtrl', function($scope, $http, $location, $routeParams, appSettings, $state) {
            var userId = localStorage.getItem('id');
            var isNew;
            $scope.get = function() {
                    $http.get(appSettings.apiBase + '/' + userId + '/Passport')
                        .success(function(response) {
                            if (response.success) {
                                $scope.passport = response.data;
                                if (! $scope.passport) {
                                    $scope.passport = {};
                                }
                            } else {
                                var error = new AppError(response, $scope);
                                $scope.errorMessage = error.getErrorMessage();
                            }
                        })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        }

        $scope.goToPreviousPage = function() {
            $state.go('reference', {
                user_id: userId
            });
        }; $scope.goToNextPage = function() {
            $state.go('bank', {
                user_id: userId
            });
        };

        $scope.save = function() {

            $http.put(appSettings.apiBase + '/' + userId + '/Passport', $scope.passport)
                .success(function(response) {
                    if (response.success) {
                        alert("Passport Details Updated successfully");
                        $scope.goToNextPage();
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }

                })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        }

        $scope.get();
    });