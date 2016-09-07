
 'use strict';
angular.module('profileBuilder.bankDetails', ['ngRoute'])
.controller('bankDetailsCtrl',function($scope,$http,$location,$routeParams) {
  var userId = $routeParams.userId;

  $http.get('/getData/'+userId)
  .success(function(response) {
    if(response.success){
      $scope.userData=response.userData;
      localStorage.setItem('userDetails',JSON.stringify(response.userData));

      $scope.bankName = response.userData.bankDetails.bankName;
      $scope.accountNumber = response.userData.bankDetails.accountNumber;
      $scope.branchName = response.userData.bankDetails.branchName;
      $scope.accountType = response.userData.bankDetails.accountType;
      $scope.UANnumber = response.userData.bankDetails.UANnumber;
      
    }
    else{
      alert('Error1: ' + err);
    }
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
 
$scope.goToPassportDetails = function(){
  $location.url('/passportDetails/'+userId);

};

$scope.saveData=function(){
  alert("save called");
    $scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));

var bankDetails = [
    {
        bankName : $scope.passportNumber,
        accountNumber : $scope.passportPlace,
        branchName : $scope.validFrom,
        UANnumber : $scope.validTill
    }
];

    var data = {
        bankDetails : bankDetails
    };

    $http.put('/saveDataPage', data)
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

  