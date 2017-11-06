var app = angular.module('app', []);
app.controller('emp',['$scope', function($scope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 4;

    $scope.updateC = function() {
        $scope.c = $scope.a * 4;
    };

    $scope.$watch("c", function(newValue, oldValue) { //we have created a watch manually using $watch
        if(newValue != oldValue) {
            console.log("updated c to " +newValue);
        }
    });
}]);