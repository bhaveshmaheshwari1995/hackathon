'use strict';

angular.module('profileBuilder.profile', [ 'ngRoute' ]).controller(
		"appCtrl",
		[
				'$rootScope',
				'$scope',
				'$location',
				function($rootScope, $scope, $location) {

					var vm = this;

					//Main menu items of the dashboard
					vm.menuItems = [ {
						title : "Dashboard",
						icon : "dashboard",
						state : "dashboard"
					}, {
						title : "Skills",
						icon : "gears",
						state : "skills"
					}, {
						title : "Education",
						icon : "graduation-cap",
						state : "education"
					}, {
						title : "Experience",
						icon : "suitcase",
						state : "experience"
					}, {
						title : "Recent Projects",
						icon : "file-code-o",
						state : "recent"
					}, {
						title : "Websites",
						icon : "globe",
						state : "websites"
					}, {
						title : "Portfolio",
						icon : "anchor",
						state : "portfolio"
					}, {
						title : "About Me",
						icon : "user-secret",
						state : "about"
					}, {
						title : "Contact",
						icon : "phone",
						state : "contact"
					} ];

					//controll sidebar open & close in mobile and normal view
					vm.sideBar = function(value) {
						if ($(window).width() <= 767) {
							if ($("body").hasClass('sidebar-open'))
								$("body").removeClass('sidebar-open');
							else
								$("body").addClass('sidebar-open');
						} else {
							if (value == 1) {
								if ($("body").hasClass('sidebar-collapse'))
									$("body").removeClass('sidebar-collapse');
								else
									$("body").addClass('sidebar-collapse');
							}
						}
					};

					console.log('getting in to the app controller');

				} ]);
