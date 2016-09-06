'use strict';

// Declare app level module which depends on views, and components
angular.module('profileBuilder', [
  'ngRoute',
  'profileBuilder.login',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {


    $routeProvider.otherwise({redirectTo: '/login'});
	 $routeProvider.when('/login', {
      templateUrl: './views/login.html',
      controller: 'loginCtrl'
      });  
     $routeProvider.when('/newEmployee', {
      templateUrl: './views/newEmployee.html',
      controller: 'newEmployeeCtrl'
      });
      $routeProvider.when('/FBConnect', {
      templateUrl: './views/FBConnect.html',
      controller: 'FBConnectCtrl'
      });
      $routeProvider.when('/linkedInConnect', {
      templateUrl: './views/linkedInConnect.html',
      controller: 'linkedInConnectCtrl'
      });
      $routeProvider.when('/registration1', {
      templateUrl: './views/Registration_1.html',
      controller: 'linkedInConnectCtrl'
      });
      $routeProvider.when('/registration2', {
      templateUrl: './views/Registration_2.html',
      controller: 'linkedInConnectCtrl'
      });
      $routeProvider.when('/education', {
      templateUrl: './views/Education.html',
      controller: 'loginCtrl'
      });  
     $routeProvider.when('/employmentDetails', {
      templateUrl: './views/employmentDetails.html',
      controller: 'employmentDetailsCtrl'
      });


}]);
