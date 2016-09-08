angular.module('profileBuilder.HRMenu', []).controller('HRMenuCtrl', function($scope) {
  $scope.actions = [
		  {
			  'name': 'OB Forms',
			  'path': '#profile/OBGenerate/:userId'
		  },
		  {
			  'name': 'Generate OB code',
			  'path': '#/registration2/:userId'
		  },
		  {
			  'name': 'Employees',
			  'path': '#/education/:userId'
		  },
		  {
			  'name': 'To Do',
			  'path': '#/employmentDetails/:userId'
		  },
		  {
			  'name': 'todo',
			  'path': '#/refVerify/:userId'
		  },
		  {
			  'name': 'Connect',
			  'path': '#/passportDetails/:userId'
		  }
  ];
$scope.activeMenu = $scope.menuItems[0].name;
   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem;
 }
});
