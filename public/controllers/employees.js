'use strict';
angular.module('profileBuilder.employees', ['ngRoute'])

.controller('employeesCtrl',function($scope,$http,$location,$stateParams, appSettings) {

	var userId = $stateParams.userId;

  $scope.employees=[];


  $http.get(appSettings.apiBase + '/list/1/2')
  .success(function(response) {
  	if(response.success){
      $scope.employees = response.data;

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




