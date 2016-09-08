'use strict';
angular.module('profileBuilder.bankDetails', ['ngRoute'])
    .controller('bankDetailsCtrl', function($scope, $http, $location, $routeParams, appSettings, $state) {
        var userId = localStorage.getItem('id');
        var isNew;
        $scope.get = function() {
            $http.get(appSettings.apiBase + '/' + userId + '/Bank')
                .success(function(response) {
                    if (response.success) {
                        $scope.bankDetail = response.data;
                        if (! $scope.bankDetail) {
                            $scope.bankDetail = {};
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
            $state.go('passport', {
                user_id: userId
            });
        };
        $scope.goToNextPage = function() {
            if (localStorage.getItem('newUser') == 'true') {
                alert("Your all details have been saved successfully!!!");
                localStorage.clear();
                $state.go('lastPage');
            } else {
                alert("Your all details have been saved successfully!!!");
                $state.go('profile', {
                    userId: userId
                });
            }

        };

        $scope.save = function() {
            $http.put(appSettings.apiBase + '/' + userId + '/Bank', $scope.bankDetail)
                .success(function(response) {
                    if (response.success) {
                        alert("Bank Details Updated successfully");
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