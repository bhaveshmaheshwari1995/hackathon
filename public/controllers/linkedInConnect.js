'use strict';

angular.module('profileBuilder.linkedInConnect', ['ngRoute'])
    .controller('linkedInCtrl', function($scope, $http, $location, $state, $stateParams, appSettings) {
    	var status = $stateParams.status,
    		userId = $stateParams.user_id;
    	if (status == 'error') {
    		$scope.error = true;
    	} else if(status == 'success') {
	        $http.get(appSettings.ssoUrl + 'scrap/' + userId);
	        $scope.success = true;
    	}
    	$scope.linkedinUrl =  appSettings.ssoUrl + 'link/' + userId + '?redirectPath=/linked_in_connect/'+userId;
        $scope.goToNextPage = function() {
            $state.go('basic', {
                user_id: localStorage.getItem('id')
            });
        };
    });