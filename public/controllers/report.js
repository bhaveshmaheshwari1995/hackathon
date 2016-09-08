'use strict';
angular.module('profileBuilder.reports', ['ngRoute'])

.controller('reportsCtrl', function($scope, $http, $location, $stateParams, appSettings, $state) {

    $http.get(appSettings.apiHrBase + '/analytics/' + localStorage.getItem('id'))
        .success(function(response) {
            if (response.success) {
                $scope.OBs = response.data;
                $(function() {
                  $('#container')
                      .highcharts(
                          {
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
                              name : 'Brands',
                              colorByPoint : true,
                              data : [ {
                                name : 'Microsoft Internet Explorer',
                                y : 56.33
                              }, {
                                name : 'Chrome',
                                y : 24.03,
                                sliced : true,
                                selected : true
                              }, {
                                name : 'Firefox',
                                y : 10.38
                              }, {
                                name : 'Safari',
                                y : 4.77
                              }, {
                                name : 'Opera',
                                y : 0.91
                              }, {
                                name : 'Proprietary or Undetectable',
                                y : 0.2
                              } ]
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

