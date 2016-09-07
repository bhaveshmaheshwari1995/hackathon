'use strict';
angular.module('profileBuilder.education', ['ngRoute'])
.controller('educationCtrl',function($scope,$http,$location,$routeParams) {
  var userId = $routeParams.userId;
  $scope.education=[];

  $http.get('/getData/'+userId)
  .success(function(response) {
    if(response.success){
      $scope.userData=response.userData;

      localStorage.setItem('userDetails',JSON.stringify(response.userData));
      
      //$scope.education = $scope.userData.education;

      // $scope.institution = $scope.userData.institution;
      // $scope.fromYear = $scope.userData.fromYear;
      // $scope.toYear = $scope.userData.toYear;
      // $scope.board = $scope.userData.board;
      // $scope.cgpa = $scope.userData.cgpa;

    }
    else{
      alert('Error1: ' + err);

    }
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  

$scope.saveEducationDetails = function(){
  alert($scope.institution);
$scope.saveData();
};

$scope.goToEducation = function(){
  $location.url('/education/'+userId);

};

$scope.goToRegistration1 = function(){
  $location.url('/registration1/'+userId);

};

  $scope.addEducationDetails = function(){
  alert("aaya");

    var institution = $scope.institution ;
    var fromYear = $scope.fromYear ;
    var toYear = $scope.toYear ;
    var board = $scope.board ;
    var cgpa = $scope.cgpa ;

    $scope.education.push({'institution':institution,'fromYear':fromYear,'toYear':toYear,'board':board,'cgpa':cgpa});
    alert(JSON.stringify($scope.education));
    $scope.institution = "";
    $scope.fromYear = "";
    $scope.toYear = "";
    $scope.board = "";
    $scope.cgpa = "";
};

$scope.saveData=function(){

    $scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));


    var data = {
        page:3,
        education : $scope.education
    };
alert(JSON.stringify(angular.copy(data)));
    $http.put('http://172.24.144.106:3000/saveDataPage', data)
    .success(function(response) {
     if(response.success){
          alert("User Details Updated successfully");

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

  