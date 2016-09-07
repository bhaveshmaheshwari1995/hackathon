angular.module('profileBuilder.breadCrumb', []).controller('breadCrumbCtrl', function($scope) {
  $scope.menuItems = [
		  {
			  'name': 'Basic',
			  'path': '/registration1'
		  },
		  {
			  'name': 'Emergency',
			  'path': '/registration2'
		  },
		  {
			  'name': 'Education',
			  'path': '/education'
		  },
		  {
			  'name': 'Employment',
			  'path': '/employmentDetails'
		  },
		  {
			  'name': 'Reference',
			  'path': '/refVerify'
		  },
		  {
			  'name': 'Passport',
			  'path': '/passportDetails'
		  },
		  {
			  'name': 'Bank & IT',
			  'path': '/bankDetails'
		  }
  ];
$scope.activeMenu = $scope.menuItems[5].name;
   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem;
 }
});
