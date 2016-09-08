'use strict';
angular.module('profileBuilder.employment', ['ngRoute']).controller('employmentDetailsCtrl',
    function($scope, $http, $location, $routeParams, appSettings) {
        $scope.get = function() {

            $http.get(appSettings.apiBase + '/getData').success(
                function(response) {
                    if (response.success) {
                        $scope.detailsList = [{
                            'previousCompany': 'asdf',
                            'fromYear': '2000',
                            'toYear': '2010',
                            'designation': 'asdf',
                            'location': '12'
                        }]; // response data
                        if ($scope.detailsList) {
                            $scope.showTable = true;
                            $scope.showForm = false;
                        } else {
                            $scope.showTable = false;
                            $scope.showForm = true;
                        }

                    } else {
                        alert("Error Occured" + response.message);

                    }
                }).error(function(err) {
                alert("Error Occured" + response.message);
            });
        };
        $scope.goToNextPage = function() {
            $location.url('/refVerify');
        };

        $scope.goToPreviousPage = function() {
            $location.url('/education');
        }

        $scope.save = function() {
            $http.post(appSettings.apiBase + '/saveDataPage', $scope.employmentDetail)

            .success(function(response) {
                if (response.success) {
                    alert("Employment Details Updated successfully");
                } else {
                    alert("Error Occured" + response.message);
                }

            }).error(function(response) {
                alert("Error Occured" + response.message);
            });
        }

        $scope.addMoreDetails = function() {
            $scope.showTable = false;
            $scope.showForm = true;
            $scope.details = null;
        };

        $scope.delete = function(id) {
            // delete query from service
            $http.delete(appSettings.apiBase + '/getData/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.get();
                    } else {
                        alert("Error Occured" + response.message);
                    }
                }).error(function(err) {
                alert("Error Occured" + response.message);
            });
        };

        $scope.edit = function(id) {
            $http.get(appSettings.apiBase + '/getData/' + id).success(
                function(response) {
                    if (response.success) {
                        $scope.employmentDetail = {
                            'previousCompany': 'asdf',
                            'fromYear': '2000',
                            'toYear': '2010',
                            'designation': 'asdf',
                            'location': '12'
                        }; // response
                        // details
                        $scope.showTable = false;
                        $scope.showForm = true;

                    } else {
                        alert("Error Occured" + response.message);

                    }
                }).error(function(err) {
                alert("Error Occured" + response.message);
            });
        };
        $scope.get();
    });