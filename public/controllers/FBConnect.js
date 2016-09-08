'use strict';

angular.module('profileBuilder.FBConnect', ['ngRoute'])
    .controller('fbCtrl', function($scope, $http, $location, $routeParams, $state) {
        $scope.goToNextPage = function() {
          $state.go('linkedInConnect', {user_id: localStorage.getItem('id')});
        };

    });