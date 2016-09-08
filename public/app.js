'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('profileBuilder', [
  'ui.router',
  'profileBuilder.login',
  'profileBuilder.FBConnect',
  'profileBuilder.linkedInConnect',
  'profileBuilder.basic',
  'profileBuilder.contact',
  'profileBuilder.education',
  'profileBuilder.breadCrumb',
  'profileBuilder.passportDetails',
  'profileBuilder.bankDetails',
  'profileBuilder.employment',
  'profileBuilder.employees',
  'profileBuilder.OBForms',
  'profileBuilder.refVerify',
  'profileBuilder.HRMenu',
  'profileBuilder.newEmployee',
  'profileBuilder.genOBCode',
  'profileBuilder.profile',
  'profileBuilder.reports'
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
    url:'/new_employee',
    templateUrl: './views/newEmployee.html',
    controller: 'newEmployeeCtrl'
  })
  .state('FBConnect',{
    url:'/fb_connect/:user_id',
    templateUrl: './views/FBConnect.html',
    controller: 'fbCtrl'
  })
  .state('linkedInConnect',{
    url:'/linked_in_connect/:user_id',
    templateUrl: './views/LinkedInConnect.html',
    controller: 'linkedInCtrl'
  })
  .state('basic',{
    url:'/profile/:user_id/basic',
    templateUrl: './views/Registration_1.html',
    controller: 'registration1Ctrl'
  })
  .state('contact',{
    url:'/profile/:user_id/contact',
    templateUrl: './views/Registration_2.html',
      controller: 'registration1Ctrl2'
  })
  .state('education',{
    url:'/profile/:user_id/education',
    templateUrl: './views/Education.html',
    controller: 'educationCtrl'
  })
  .state('employment',{
    url:'/profile/:user_id/employment',
    templateUrl: './views/employmentDetails.html',
    controller: 'employmentDetailsCtrl'
  })
  .state('reference',{
    url:'/profile/:user_id/reference',
    templateUrl: './views/refVerify.html',
      controller: 'refVerifyCtrl'
  })
  .state('passport',{
    url:'/profile/:user_id/passport',
    templateUrl: './views/passportDetails.html',
      controller: 'passportDetailsCtrl'
  })
  .state('bank',{
    url:'/profile/:user_id/bank',
    templateUrl: './views/bankDetails.html',
      controller: 'bankDetailsCtrl'
  })
  .state('profile',{
    url:'/profile/:userId',
    templateUrl: './views/profile.html',
      controller: 'profileCtrl'
  })
  .state('genOBCode',{
    url:'/genOBCode',
    templateUrl: './views/genOBCode.html',
    controller: 'genOBCodeCtrl'
  })
  .state('OBForms',{
    url:'/OBForms',
    templateUrl: './views/OBForm.html',
    controller: 'OBFormsCtrl'
  })
  .state('employees',{
    url:'/employees',
    templateUrl: './views/employees.html',
    controller: 'employeesCtrl'
  })
  .state('todo',{
    url:'/todo/:userId',
    templateUrl: './views/todoCtrl.html',
      controller: 'todoCtrl'
  })
  .state('connect',{
    url:'/connect/:userId',
    templateUrl: './views/connectCtrl.html',
      controller: 'connectCtrl'
  })
  .state('lastPage',{
    url:'/profile/complete',
    templateUrl: './views/lastPage.html'
  })
  .state('report',{
    url:'/report',
    templateUrl: './views/report.html',
    controller: 'reportsCtrl'
  })  
});

app.run(function($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (localStorage.getItem('token') === null) {console.log("asdf");
        $state.go('login');
      }
    });
})
app.constant('appSettings', appConfig);
