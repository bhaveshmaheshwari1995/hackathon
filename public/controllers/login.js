'use strict';

angular.module('profileBuilder.login', ['ngRoute'])
.controller('loginCtrl',function($scope,$http,$location,$routeParams) {
  

$scope.authenticate = function(){
  alert("sdfsdf");
if(1==1){
var data = {
  userName: $scope.userEmail,
  userPassword : $scope.userPassword,
};

$http.post('/myapi/authenticate',data)
.success(function(response){
  if(response.success)
    {
      var userNameTemp = $scope.userName.split('@');
      localStorage.setItem('token',response.token);
      localStorage.setItem('userName',userNameTemp[0]);
      $location.url('/listOption');
    }
    else
    {
      $scope.showError = true;
    } 

})
.error(function(response){
  console.log("The error is "+response);
})

}
else
{
$scope.showError = true;
}

};

});