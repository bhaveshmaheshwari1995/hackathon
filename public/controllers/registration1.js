'use strict';
angular.module('profileBuilder.registration1', ['ngRoute'])
.controller('registration1Ctrl',function($scope,$http,$location,$routeParams) {
	var userId = $routeParams.userId;


  $http.get('/getData/'+userId)
  .success(function(response) {
  	if(response.success){
      $scope.userData=response.userData;
      localStorage.setItem('userDetails',JSON.stringify(response.userData));
      $scope.firstName = $scope.userData.firstName;
  	  $scope.lastName = $scope.userData.lastName;
  	  $scope.gender = $scope.userData.gender;
  	  $scope.date = $scope.userData.date;
  	  $scope.mobileNumber = $scope.userData.mobileNumber;
  	  $scope.email = $scope.userData.email;
  	  $scope.currentAddress = $scope.userData.currentAddress;
  	  $scope.permanentAddress = $scope.userData.permanentAddress;
  	}
  	else{
  		alert('Error1: ' + err);

  	}
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  

$scope.saveRegisterationData1 = function(){
$scope.saveData();
};

$scope.goToLinkedIn = function(){
  $location.url('/linkedInConnect');

};

$scope.saveData=function(){

  	$scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));

    var data = {
        firstName : $scope.firstName,
        lastName : $scope.lastName,
        gender : $scope.gender,
        date : $scope.date,
        mobileNumber : $scope.mobileNumber,
        email : $scope.email,
        currentAddress : $scope.currentAddress,
        permanentAddress : $scope.permanentAddress
    };

    $http.put('/saveDataPage1', data)
    .success(function(response) {
     if(response.success){
					alert("User Details Updated successfully");
					  $location.url('/registration2/'+userId);
				}
				else
				{
					alert("Error Occured"+response.message);
				}

    })
    .error(function(response) {
      alert("Error Occured"+response.message);
    });
  }

});

  