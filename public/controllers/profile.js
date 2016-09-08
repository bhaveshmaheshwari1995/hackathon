'use strict';
angular.module('profileBuilder.profile', ['ngRoute'])

.controller('profileCtrl',function($scope,$http,$location,$stateParams, appSettings) {

	var userId = $stateParams.userId;

  $scope.userDetails = {};

  $http.get(appSettings.apiBase + '/:userId')
  .success(function(response) {
  	if(response.success){
      $scope.userDetails = response.data;
      alert("aaaya"+ JSON.stringify($scope.userDetails));


  	}
  	else{
  		alert('Error1: ' + err);

  	}
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  

$scope.goToProfile = function(id){
  $location.url('/profile/'+userId);

};

});  




