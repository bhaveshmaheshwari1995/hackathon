'use strict';

angular.module('profileBuilder.linkedInConnect', ['ngRoute'])
.controller('linkedInCtrl',function($scope,$http,$location,$routeParams) {
  
var userId = $routeParams.userId;
$scope.goToRegistration1 = function(){
  $location.url('/registration1/'+userId);

};

});