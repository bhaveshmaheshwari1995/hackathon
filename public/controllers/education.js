'use strict';
angular.module('profileBuilder.education', ['ngRoute']).controller('educationCtrl',
    function($scope, $http, $location, $routeParams, appSettings, $state) {
        var userId = localStorage.getItem('id');
        var isNew;
        $scope.get = function() {
            $http.get(appSettings.apiBase + '/' + userId + '/Education').success(
                function(response) {
                    if (response.success) {
                        $scope.detailsList = response.data;
                        if ($scope.detailsList.length) {
                            $scope.showTable = true;
                            $scope.showForm = false;
                        } else {
                            $scope.showTable = false;
                            $scope.showForm = true;
                            isNew = true;
                            $scope.educationDetail = {};
                        }

                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();

                    }
                }).error(function(response) {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            });
        };
        $scope.goToNextPage = function() {
            $state.go('employment', {
                user_id: userId
            });
        };

        $scope.goToPreviousPage = function() {
            $state.go('contact', {
                user_id: userId
            });
        }
        
        $scope.save = function() {
          var url;
          if (isNew) {
            url = appSettings.apiBase + '/' + userId + '/Education';
          } else {
            url = appSettings.apiBase + '/' + userId + '/Education/' + $scope.educationDetail._id;
          }
            $http.put(url, $scope.educationDetail)

            .success(function(response) {
                if (response.success) {
                    alert("Education Details Updated successfully");
                    $scope.educationDetail = {};
                    $scope.get();
                } else {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                }
            }).error(function(response) {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            });
        }

        $scope.addMoreDetails = function() {
            $scope.showTable = false;
            $scope.showForm = true;
            $scope.details = null;
            isNew = true;
            $scope.educationDetail = {};
        };

        $scope.delete = function(id) {
            $http.delete(appSettings.apiBase + '/getData/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.get();
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }
                }).error(function(response) {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            });
        };

        $scope.edit = function(id) {
            $http.get(appSettings.apiBase + '/' + userId + '/Education/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.educationDetail = response.data;
                        $scope.showTable = false;
                        $scope.showForm = true;
                        isNew = false;
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }
                }).error(function(response) {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            });
        };
        
        $scope.get();
    });