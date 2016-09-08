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
    $scope.HRMenuItems = [{
        'name': 'Generate OB Code',
        'path': 'genOBCode'
    }, {
        'name': 'OB Forms',
        'path': 'OBForms'
    }, {
        'name': 'Search Employee',
        'path': 'employees'
    }, {
        'name': 'Reports',
        'path': 'report'
    }];
    $scope.setActive = function(menuItem) {
        $scope.activeMenu = menuItem;
    }
});