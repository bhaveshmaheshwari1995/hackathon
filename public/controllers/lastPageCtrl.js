'use strict';

angular.module('profileBuilder.lastPageCtrl', ['ngRoute']).controller(
    'lastPageCtrl',
    function($rootScope, $scope, $http, $location, appSettings, $state) {
    	localStorage.clear();
    });