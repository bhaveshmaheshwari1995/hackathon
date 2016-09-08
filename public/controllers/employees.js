'use strict';
angular.module('profileBuilder.employees', ['ngRoute'])

.controller('employeesCtrl',function($scope,$http,$location,$routeParams, appSettings) {

	var userId = $routeParams.userId;

  $scope.employees=[{'name':"Bhavesh","id":"1","email":"bhavesh@gmail.com"},
                 {'name':"Ameya","id":"2","email":"ameya@gmail.com"}];


  $http.get(appSettings.apiBase + '/getEmployeeData/'+userId)
  .success(function(response) {
  	if(response.success){
      $scope.employees = response.userData;

  	}
  	else{
  		alert('Error1: ' + err);

  	}
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  

$scope.goToProfile = function(id){
  $location.url('/linkedInConnect');

};

});  




