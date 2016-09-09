'use strict';
angular.module('profileBuilder.basic', ['ngRoute'])
    .controller('registration1Ctrl', function($scope, $http, $location, $stateParams, appSettings, $state) {
    	var userId = $stateParams.user_id;

        $scope.get = function() {
            $http.get(appSettings.apiBase + '/' + userId + '/basic')
                .success(function(response) {
                    if (response.success) {
                        $scope.basicDetails = response.data;
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

        $scope.updateAddress = function() {
            $scope.basicDetails.permanentAddress = angular.copy($scope.basicDetails.currentAddress);
        }
        
        $scope.goToNextPage = function() {
            $state.go('contact', {user_id: userId});
        }

        $scope.save = function() {
            $http.put(appSettings.apiBase + '/' + userId + '/basic', $scope.basicDetails)
                .success(function(response) {
                    if (response.success) {
                        alert("User Details Updated successfully");
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