'use strict';
angular.module('profileBuilder.profile', ['ngRoute'])

.controller('profileCtrl',
    function($scope, $http, $location, $stateParams, appSettings) {

        var userId = $stateParams.userId;

        $scope.userDetails = {
"statusCode": 500,
"success": true,
"message": "data sent",
"data": {
"_id": "57d1526e4147e33f599db17f",
"lastLogin": "Thu Sep 08 2016 17:29:31 GMT+0530 (IST)",
"emailId": "ameya.shukla@aspiresys.com",
"lastName": "Shukla",
"firstName": "Ameya",
"__v": 1,
"verificationReference": [
{
"name": "ameya",
"_id": "57d153c3cf5df443ff3766a3"
}
],
"previousExp": [],
"education": [
{
"institution": "btecdsfh",
"fromYear": "2451",
"_id": "57d152ad4147e33f599db182"
},
{
"institution": "btecdsf676h",
"fromYear": "2451",
"_id": "57d152b84147e33f599db183"
},
{
"institution": "tedr",
"fromYear": "2451",
"_id": "57d152d6b673d6410168d4a4"
},
{
"institution": "tedr",
"fromYear": "2451",
"_id": "57d156ec94197d5164abbadf"
}
],
"emergencyContact": []
}
};
$scope.emailAvailable = "";
$scope.DOJAvailable = "";

        $http.get(appSettings.apiBase + '/' + userId).success(function(response) {
            if (response.success) {
                $scope.userDetails = response.data;
            } else {
                var error = new AppError(response, $scope);
                $scope.errorMessage = error.getErrorMessage();
            }
        }).error(function(response) {
            var error = new AppError(response, $scope);
            $scope.errorMessage = error.getErrorMessage();
        });

       if($scope.userDetails.emailId == undefined)
       {
          $scope.emailAvailable = false;//ng-show="checked"

       }
       else
       {
          $scope.emailAvailable = true;
       }
       if($scope.userDetails.dateOfJoining == undefined)
       {
          $scope.DOJAvailable = false;//ng-show="checked"

       }
       else
       {
          $scope.DOJAvailable = true;
       }


      $scope.saveEmailId = function() {
            $http.put(appSettings.apiBase + '/' + userId + '/emailId', $scope.emailId)
                .success(function(response) {
                    if (response.success) {
                        alert("Aspire Email Updated successfully");
                        
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }

                })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };

        $scope.saveDOJ = function() {
            $http.put(appSettings.apiBase + '/' + userId + '/dateOfJoining', $scope.dateOfJoining)
                .success(function(response) {
                    if (response.success) {
                        alert("Date of Joining Updated successfully");
                        
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }

                })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };

        $scope.approve = function() {
            $http.put(appSettings.apiBase + '/hr/' + userId,"Verified")
                .success(function(response) {
                    if (response.success) {
                        alert("Date of Joining Updated successfully");
                        
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }

                })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };

        $scope.requestModify = function() {
            $http.put(appSettings.apiBase + '/hr/' + userId , "Draft")
                .success(function(response) {
                    if (response.success) {
                        alert("Date of Joining Updated successfully");
                        
                    } else {
                        var error = new AppError(response, $scope);
                        $scope.errorMessage = error.getErrorMessage();
                    }

                })
                .error(function(response) {
                    var error = new AppError(response, $scope);
                    $scope.errorMessage = error.getErrorMessage();
                });
        };


    });