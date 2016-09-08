angular.module('profileBuilder.breadCrumb', []).controller('breadCrumbCtrl', function($scope) {
    $scope.menuItems = [{
        'name': 'Basic',
        'path': 'basic'
    }, {
        'name': 'Contact',
        'path': 'contact'
    }, {
        'name': 'Education',
        'path': 'education'
    }, {
        'name': 'Employment',
        'path': 'employment'
    }, {
        'name': 'References',
        'path': 'reference'
    }, {
        'name': 'Passport',
        'path': 'passport'
    }, {
        'name': 'Bank & IT',
        'path': 'bank'
    }];
    $scope.activeMenu = $scope.menuItems[0].name;
    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem;
    }
});