'use strict';
angular.module('profileBuilder.reports', ['ngRoute'])

.controller('reportsCtrl', function($scope, $http, $location, $stateParams, appSettings, $state) {

    $http.get(appSettings.apiHrBase + '/analytics')
        .success(function(response) {
            if (response.success) {
                $(function() {
                  $('#container')
                      .highcharts(
                          {
			    colors: ["#90ee7e","#7cb5ec",  "#f7a35c"],
                            chart : {
                              plotBackgroundColor : null,
                              plotBorderWidth : null,
                              plotShadow : false,
                              type : 'pie'
                            },
                            title : {
                              text : 'Profile Update Statistics'
                            },
                            tooltip : {
                              pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                            plotOptions : {
                              pie : {
                                allowPointSelect : true,
                                cursor : 'pointer',
                                dataLabels : {
                                  enabled : true,
                                  format : '<b>{point.name}</b>: {point.percentage:.1f} %',
                                  style : {
                                    color : (Highcharts.theme && Highcharts.theme.contrastTextColor)
                                        || 'black'
                                  }
                                }
                              }
                            },
                            series : [ {
                              name : 'Profile',
                              colorByPoint : true,
                              data : [ {
                                name : 'Educational',
                                y : response.eduCredit,
                              }, {
                                name : 'Skill Set',
                                y : response.skillCredit,
                              }, {
                                name : 'Certifications',
                                y : response.credCredit
                              }]
                            } ]
                          });
                });
            } else {
              var error = new AppError(response, $scope);
              $scope.errorMessage = error.getErrorMessage();
            }
        })
        .error(function(response) {
          var error = new AppError(response, $scope);
          $scope.errorMessage = error.getErrorMessage();
        });


    $scope.goToProfile = function(id) {
        $state.go('profile', {userId: id});
    };

});

