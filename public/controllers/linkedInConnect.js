'use strict';

angular.module('profileBuilder.linkedInConnect', ['ngRoute'])
    .controller('linkedInCtrl', function($scope, $http, $location, $routeParams, $state) {
        $scope.goToNextPage = function() {
            $state.go('basic', {
                user_id: localStorage.getItem('id')
            });
        };
    });