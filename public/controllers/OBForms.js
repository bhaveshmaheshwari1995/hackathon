'use strict';
angular.module('profileBuilder.OBForms', ['ngRoute'])

.controller('OBFormsCtrl',function($scope,$http,$location,$stateParams, appSettings) {

	var userId = $stateParams.userId;

  $scope.OBs=[{'name':"Bhavesh","id":"1","email":"bhaveshasa@gmail.com"},
                 {'name':"Ameya","id":"2","email":"ameya@gmail.com"}];


  $http.get(appSettings.apiBase + '/getOBData/'+userId)
  .success(function(response) {
  	if(response.success){
      $scope.OBs = response.userData;

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




