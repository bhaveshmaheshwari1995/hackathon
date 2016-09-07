'use strict';

angular.module('profileBuilder.FBConnect', ['ngRoute'])
.controller('fbCtrl',function($scope,$http,$location,$routeParams) {
var userId = $routeParams.userId;
$scope.goToLinkedIn = function(){
  $location.url('/linkedInConnect/'+userId);

};

});