'use strict';
angular.module('profileBuilder.profile', ['ngRoute'])

.controller('profileCtrl',function($scope,$http,$location,$stateParams, appSettings) {

	var userId = $stateParams.userId;

  $scope.userDetails = {
"_id": "57d1526e4147e33f599db17f",
"lastLogin": "Thu Sep 08 2016 17:29:31 GMT+0530 (IST)",
"emailId": "ameya.shukla@aspiresys.com",
"lastName": "Shukla",
"firstName": "Ameya",
"mobileNumber":"9898565547",
"dateOfBirth":"21 Jan 1995",
"__v": 1,
"verificationReference": [
{
"name": "ameya",
"_id": "57d153c3cf5df443ff3766a3",
}
],
"linkedinCertification": [
{
"certificationName": "W3School",
"certificationYear": "2016"
}
],
"linkedinSkills": [
{
"skillName": "AngularJS"
},
{
"skillName": "NodeJS"
}
],
"previousExp": [
{
"previousCompanyName": "Aspire",
"fromYear": "2013",
"location": "chennai",
"designation": "PM",
"toYear": "2015",
"_id": "57d152ad4147e33f599db182"
},
{
"previousCompanyName": "TCS",
"fromYear": "2011",
"location": "Jaipur",
"designation": "SE",
"toYear": "2013",
"_id": "57d152ad4147e33f599db182"
}
],
"education": [
{
"institution": "btecdsfh",
"fromYear": "2451",
"cgpa": "8.2",
"degree":"B.Tech",
"board": "CBSE",
"toYear": "2451",
"_id": "57d152ad4147e33f599db182"
},
{
"institution": "btecdsf676h",
"fromYear": "2451",
"toYear": "2451",
"degree":"B.Tech",
"board": "CBSE",
"cgpa": "9.0",
"_id": "57d152b84147e33f599db183" 
}
],
"emergencyContact": []
};


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




