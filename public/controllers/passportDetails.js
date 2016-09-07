
 'use strict';
angular.module('profileBuilder.passportDetails', ['ngRoute'])
.controller('passportDetailsCtrl',function($scope,$http,$location,$routeParams) {
  var userId = $routeParams.userId;

  $http.get('/getData/'+userId)
  .success(function(response) {
    if(response.success){
      $scope.userData=response.userData;
      localStorage.setItem('userDetails',JSON.stringify(response.userData));

      $scope.passportNumber = response.userData.passportDetails.passportNumber;
      $scope.passportPlace = response.userData.passportDetails.passportPlace;
      $scope.validFrom = response.userData.passportDetails.validFrom;
      $scope.validTo = response.userData.passportDetails.validTo;
      
    }
    else{
      alert('Error1: ' + err);
    }
  })
  .error(function(err) {
    alert('Error2: ' + err);
  });
  


$scope.goToBankDetails = function(){
  $location.url('/bankDetails/'+userId);
};

$scope.saveData=function(){
    $scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));

    var passportDetails = [
    {
        passportNumber : $scope.passportNumber,
        placeOfIssue : $scope.passportPlace,
        validFrom : $scope.validFrom,
        validTill : $scope.validTill
    }
];

    var data = {
        passportDetails : passportDetails
    };

    $http.put('/saveDataPage', data)
    .success(function(response) {
     if(response.success){
          alert("User Details Updated successfully");
          goToBankDetails();
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

  