'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('profileBuilder', [
  'ui.router',
  'profileBuilder.login',
  'profileBuilder.FBConnect',
  'profileBuilder.linkedInConnect',
  'profileBuilder.registration1',
  'profileBuilder.registration2',
  'profileBuilder.education',
  'profileBuilder.breadCrumb',
  'profileBuilder.passportDetails',
  'profileBuilder.bankDetails',
]);
app.config( function($locationProvider, $stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: './views/login.html',
    controller: 'loginCtrl'
  })
  .state('newEmployee',{
    url:'/newEmployee',
    templateUrl: './views/newEmployee.html',
    controller: 'newEmployeeCtrl'
  })
  .state('FBConnect',{
    url:'/FBConnect/:userId',
    templateUrl: './views/FBConnect.html',
    controller: 'fbCtrl'
  })
  .state('linkedInConnect',{
    url:'/linkedInConnect/:userId',
    templateUrl: './views/LinkedInConnect.html',
    controller: 'linkedInCtrl'
  })
  .state('registration1',{
    url:'/registration1/:userId',
    templateUrl: './views/Registration_1.html',
    controller: 'registration1Ctrl'
  })
  .state('registration2',{
    url:'/registration2/:userId',
    templateUrl: './views/Registration_2.html',
      controller: 'registration1Ctrl2'
  })
  .state('education',{
    url:'/education/:userId',
    templateUrl: './views/Education.html',
      controller: 'educationCtrl'
  })
  .state('employmentDetails',{
    url:'/employmentDetails/:userId',
    templateUrl: './views/employmentDetails.html',
    controller: 'employmentDetailsCtrl'
  })
  .state('refVerify',{
    url:'/refVerify/:userId',
    templateUrl: './views/refVerify.html',
      controller: 'refVerifyCtrl'
  })
  .state('passportDetails',{
    url:'/passportDetails/:userId',
    templateUrl: './views/passportDetails.html',
      controller: 'passportDetailsCtrl'
  })
  .state('bankDetails',{
    url:'/bankDetails/:userId',
    templateUrl: './views/bankDetails.html',
      controller: 'bankDetailsCtrl'
  })
  .state('genOBCode',{
    url:'/genOBCode/:userId',
    templateUrl: './views/genOBCode.html',
      controller: 'genOBCodeCtrl'
  })
});
app.constant('appSettings', appConfig);
