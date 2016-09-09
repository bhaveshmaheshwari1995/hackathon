'use strict';
angular.module('profileBuilder.employment', ['ngRoute']).controller('employmentDetailsCtrl',
    function($scope, $http, $location, $routeParams, appSettings, $state, $stateParams) {
        var userId = $stateParams.user_id;
        var isNew;
        $scope.get = function() {

            $http.get(appSettings.apiBase + '/' + userId + '/Employment').success(
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
                            $scope.employmentDetail = {};
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
            $state.go('reference', {
                user_id: userId
            });
        };

        $scope.goToPreviousPage = function() {
            $state.go('education', {
                user_id: userId
            });
        }

        $scope.save = function() {
            var url;
            if (isNew) {
                url = appSettings.apiBase + '/' + userId + '/Employment';
            } else {
                url = appSettings.apiBase + '/' + userId + '/Employment/' + $scope.employmentDetail._id;
            }
            $http.put(url, $scope.employmentDetail)

            .success(function(response) {
                if (response.success) {
                    alert("Employment Details Updated successfully");
                    $scope.employmentDetail = {};
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
            $scope.employmentDetail = {};
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
            $http.get(appSettings.apiBase + '/' + userId + '/Employment/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.employmentDetail = response.data;
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