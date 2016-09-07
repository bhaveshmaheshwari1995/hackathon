'use strict';
angular.module('profileBuilder.registration2', ['ngRoute'])
.controller('registration1Ctrl2',function($scope,$http,$location,$routeParams) {
  var userId = $routeParams.userId;
  var emergencyContact=[];


  $http.get('/getData/'+userId)
  .success(function(response) {
    if(response.success){
      $scope.userData=response.userData;
      localStorage.setItem('userDetails',JSON.stringify(response.userData));
      $scope.emergencyName1 = $scope.userData.emergencyName1;
      $scope.relationshipStatus1 = $scope.userData.relationshipStatus1;
      $scope.emergencyMobile1 = $scope.userData.emergencyMobile1;
      $scope.emergencyName2 = $scope.userData.emergencyName2;
      $scope.relationshipStatus2 = $scope.userData.relationshipStatus2;
      $scope.emergencyMobile2 = $scope.userData.emergencyMobile2;

    }
    else{
      alert('Error1: ' + err);

    }
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  

$scope.saveData2 = function(){
  alert("Helo");
$scope.saveData();
};

$scope.goToEducation = function(){
  $location.url('/education/'+userId);

};

$scope.goToRegistration1 = function(){
  $location.url('/registration1/'+userId);

};

$scope.saveData=function(){

    $scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));

    var emergencyContact = [
    {"name":$scope.emergencyName1, "relation":$scope.relationshipStatus1,"contactNumber":$scope.emergencyMobile1},
    {"name":$scope.emergencyName2, "relation":$scope.relationshipStatus2,"contactNumber":$scope.emergencyMobile2}
];

    var data = {
        emergencyContact : emergencyContact
    };

    $http.put('/saveDataPage2', data)
    .success(function(response) {
     if(response.success){
          alert("User Details Updated successfully");
          $scope.goToEducation();
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

  