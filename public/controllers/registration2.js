'use strict';
angular.module('profileBuilder.contact', ['ngRoute'])
    .controller('registration1Ctrl2', function($scope, $http, $location, $routeParams, appSettings, $state) {
        var userId = localStorage.getItem('id');

        $scope.get = function() {
            $http.get(appSettings.apiBase + '/' + userId + '/Emergency')
                .success(function(response) {
                    if (response.success) {
                        $scope.emergency = response.data;
                        if (!$scope.emergency) {
                            $scope.emergency = {};
                        }
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }
                })
                .error(function(err) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        }

        $scope.goToPrevPage = function() {
            $state.go('basic', {
                user_id: userId
            });
        };

        $scope.goToNextPage = function() {
            $state.go('education', {
                user_id: userId
            });
        };

        $scope.save = function() {
            $http.put(appSettings.apiBase + '/' + userId + '/Emergency', $scope.emergency)
                .success(function(response) {
                    if (response.success) {
                        alert("Emergency Details Updated successfully");
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