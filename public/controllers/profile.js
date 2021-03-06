'use strict';
angular.module('profileBuilder.profile', [ 'ngRoute' ])
.controller(
		'profileCtrl',
		function($scope, $http, $location, $stateParams, appSettings) {
			var userId = $stateParams.userId;

			$scope.userDetails = {};
			$scope.emailAvailable = null;
			$scope.DOJAvailable = null;
			$scope.hasToken = true;
			$scope.isHR = (localStorage.getItem('role') == 'hr');

			$http.get(appSettings.apiBase + '/' + userId).success(
					function(response) {
						if (response.success) {
							$scope.userDetails = response.data;
							$scope.emailAvailable = true;
							if ($scope.userDetails.emailId == '') {
								$scope.emailAvailable = (localStorage.getItem('role') == 'hr');
							} else {
								$scope.emailAvailable = false;
							}
							if ($scope.userDetails.dateOfJoining == '') {
								$scope.DOJAvailable = (localStorage.getItem('role') == 'hr');

							} else {
								$scope.DOJAvailable = false;
							}
						} else {
							var error = new AppError(response, $scope);
							$scope.errorMessage = error.getErrorMessage();
						}
					}).error(function(response) {
							var error = new AppError(response, $scope);
							$scope.errorMessage = error.getErrorMessage();
					});
			
			$http.get(appSettings.ssoBaseUrl + '/user/' + userId + '/token').success(
					function(response) {
						$scope.linkedinUrl = appSettings.ssoUrl + 'link/' + userId + '?redirectPath=/profile/'+userId;
						if(!response.hasToken) {
							$scope.tokenInvalidError = 'Profile hasn\'t been linked with Linkedin!'
						} else {
							$scope.tokenInvalidError = ''
						}
						
					});

			if ($scope.userDetails.emailId == undefined) {
				$scope.emailAvailable = (localStorage.getItem('role') == 'hr');
			} else {
				$scope.emailAvailable = false;
			}
			if ($scope.userDetails.dateOfJoining == undefined) {
				$scope.DOJAvailable = (localStorage.getItem('role') == 'hr');

			} else {
				$scope.DOJAvailable = false;
			}

			$scope.saveEmailId = function() {
				$http.put(
				appSettings.apiBase + '/' + userId + '/emailId', {emailAddress:$scope.emailId}).success(function(response) {
					if (response.success) {
						$scope.userDetails.emailId = $scope.emailId;
						alert("Aspire Email Updated successfully");
					} else {
						var error = new AppError(response, $scope);
						$scope.errorMessage = error.getErrorMessage();
					}
				}).error(function(response) {
					var error = new AppError(response, $scope);
					$scope.errorMessage = error.getErrorMessage();
				});
			};

			$scope.saveDOJ = function() {
				$http.put(
						appSettings.apiBase + '/' + userId + '/dateOfJoining', {dateOfJoining:$scope.dateOfJoining}).success(function(response) {
					if (response.success) {
						alert("Date of Joining Updated successfully");

					} else {
						var error = new AppError(response, $scope);
						$scope.errorMessage = error.getErrorMessage();
					}

				}).error(function(response) {
					var error = new AppError(response, $scope);
					$scope.errorMessage = error.getErrorMessage();
				});
			};

			$scope.approve = function() {
				$http.put(appSettings.apiHrBase + '/status/' + userId + "/Verified", {})
						.success(function(response) {
							if (response.success) {
								alert("User profile has been verified Succefully!");

							} else {
								var error = new AppError(response, $scope);
								$scope.errorMessage = error.getErrorMessage();
							}

						}).error(function(response) {
							var error = new AppError(response, $scope);
							$scope.errorMessage = error.getErrorMessage();
						});
			};

			$scope.requestModify = function() {
				$http.put(appSettings.apiHrBase + '/status/' + userId + "/Draft", {})
						.success(function(response) {
							if (response.success) {
								alert("User profile has moved to Draft!");
							} else {
								var error = new AppError(response, $scope);
								$scope.errorMessage = error.getErrorMessage();
							}

						}).error(function(response) {
							var error = new AppError(response, $scope);
							$scope.errorMessage = error.getErrorMessage();
						});
			};
			var data = {
				"title" : $scope.rolestarTitle,
				"desc" : $scope.rolestarDescription
			};

			$scope.addRolestar = function() {
				$http.post(
						appSettings.apiBase + '/' + userId + '/rewards',
						$scope.rolestar).success(function(response) {
					if (response.success) {
						alert("Rolestar added successfully");

					} else {
						var error = new AppError(response, $scope);
						$scope.errorMessage = error.getErrorMessage();
					}

				}).error(function(response) {
					var error = new AppError(response, $scope);
					$scope.errorMessage = error.getErrorMessage();
				});
			};
		});