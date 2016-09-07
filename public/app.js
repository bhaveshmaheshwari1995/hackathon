'use strict';

// Declare app level module which depends on views, and components
angular.module('profileBuilder', [
  'ngRoute',
  'profileBuilder.login',
  'profileBuilder.FBConnect',
  'profileBuilder.linkedInConnect',
  'profileBuilder.registration1',
  'profileBuilder.registration2',
  'profileBuilder.education',
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
      $routeProvider.when('/FBConnect/:userId', {
      templateUrl: './views/FBConnect.html',
      controller: 'fbCtrl'
      });
      $routeProvider.when('/linkedInConnect/:userId', {
      templateUrl: './views/LinkedInConnect.html',
      controller: 'linkedInCtrl'
      });
      $routeProvider.when('/registration1/:userId', {
      templateUrl: './views/Registration_1.html',
      controller: 'registration1Ctrl'
      });
      $routeProvider.when('/registration2/:userId', {
      templateUrl: './views/Registration_2.html',
      controller: 'registration1Ctrl2'
      });
      $routeProvider.when('/education/:userId', {
      templateUrl: './views/Education.html',
      controller: 'educationCtrl'
      });  
     $routeProvider.when('/employmentDetails/:userId', {
      templateUrl: './views/employmentDetails.html',
      controller: 'employmentDetailsCtrl'
      });
     $routeProvider.when('/refVerify/:userId', {
      templateUrl: './views/refVerify.html',
      controller: 'refVerifyCtrl'
      });
     $routeProvider.when('/passportDetails/:userId', {
      templateUrl: './views/passportDetails.html',
      controller: 'passportDetailsCtrl'
      });
     $routeProvider.when('/bankDetails/:userId', {
      templateUrl: './views/bankDetails.html',
      controller: 'bankDetailsCtrl'
      });


}]);
