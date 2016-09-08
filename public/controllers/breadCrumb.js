angular.module('profileBuilder.breadCrumb', []).controller('breadCrumbCtrl', function($scope) {
  $scope.menuItems = [
		  {
			  'name': 'Basic',
			  'path': '#/registration1/:userId'
		  },
		  {
			  'name': 'Emergency',
			  'path': '#/registration2/:userId'
		  },
		  {
			  'name': 'Education',
			  'path': '#/education/:userId'
		  },
		  {
			  'name': 'Employment',
			  'path': '#/employmentDetails/:userId'
		  },
		  {
			  'name': 'Reference',
			  'path': '#/refVerify/:userId'
		  },
		  {
			  'name': 'Passport',
			  'path': '#/passportDetails/:userId'
		  },
		  {
			  'name': 'Bank & IT',
			  'path': '#/bankDetails/:userId'
		  }
  ];
$scope.activeMenu = $scope.menuItems[5].name;
   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem;
 }
});
