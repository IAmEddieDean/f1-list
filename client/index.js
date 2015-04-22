'use strict';

angular.module('f1Feeder', [])
.run(['$rootScope', function($rootScope){
  $rootScope.driverInfo=[];
}])
.controller('f1Controller', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http){
  $scope.findYear = function(){
    var year = $scope.year;
    $http.get('http://ergast.com/api/f1/' + year + '/driverstandings.json')
    .then(function(response){
      $rootScope.driverInfo = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  };
}]);
