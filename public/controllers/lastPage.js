'use strict';
angular.module('profileBuilder.lastPage', ['ngRoute'])
    .controller('lastPageCtrl', function($scope, $http, $location, $routeParams, appSettings, $state) {
      $scope.message = 'Thanks for completing the process, HR will get back to you soon';
    });