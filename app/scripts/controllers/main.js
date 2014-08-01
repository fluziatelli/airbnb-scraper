'use strict';

/**
 * @ngdoc function
 * @name guestyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guestyApp
 */
angular.module('guestyApp')
    .controller('MainCtrl', function ($scope, scraperService) {

        angular.extend($scope, {
            flags: {
                stage: 0
            },
            zipCode: 94108,
            search: function() {
                search();
            },
            gridOptions: {
                columnDefs: [
                    {
                        field: "name",
                        displayName: "Property Name",
                        groupable: false
                    },
                    {
                        field: "user",
                        displayName: "Property Owner",
                        groupable: true
                    },
                    {
                        field: "price",
                        displayName: "Price",
                        groupable: false
                    },
                    {
                        field: "reviews",
                        displayName: "Number of Reviews",
                        groupable: false
                    },

                ],
                data: 'myData',
                showGroupPanel: true
            }
        });

        function search(zipCode) {
            $scope.flags.stage = 1;
            scraperService.getPlaces(zipCode || $scope.zipCode).then(function (items) {
                $scope.myData = items;
                $scope.flags.stage = 2;
            });
        }

    });
