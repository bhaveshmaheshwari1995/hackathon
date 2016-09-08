'use strict';
angular.module('profileBuilder.refVerify', ['ngRoute']).controller('refVerifyCtrl',
    function($scope, $http, $location, $routeParams, appSettings, $state) {
        var userId = localStorage.getItem('id');
        var isNew;
        $scope.get = function() {

            $http.get(appSettings.apiBase + '/' + userId + '/Reference').success(
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
                            $scope.referenceDetail = {};
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
            $state.go('passport', {
                user_id: userId
            });
        };

        $scope.goToPreviousPage = function() {
            $state.go('employee', {
                user_id: userId
            });
        }

        $scope.save = function() {
            var url;
            if (isNew) {
                url = appSettings.apiBase + '/' + userId + '/Reference';
            } else {
                url = appSettings.apiBase + '/' + userId + '/Reference/' + $scope.referenceDetail._id;
            }
            $http.put(url, $scope.referenceDetail)

            .success(function(response) {
                if (response.success) {
                    alert("Reference Details Updated successfully");
                    $scope.referenceDetail = {};
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
            $scope.referenceDetail = {};
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
            $http.get(appSettings.apiBase + '/' + userId + '/Reference/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.referenceDetail = response.data;
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