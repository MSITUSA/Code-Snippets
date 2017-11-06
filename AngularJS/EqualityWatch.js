var app = angular.module('app', []);
app.controller('emp',['$scope', function($scope) {
    $scope.o = {
        a: 1,
        b: 2,
        c: 1
    };

    $scope.$watch("o", function(oldValue, newValue) {
        if(oldValue != newValue) {
            $scope.o.c = $scope.o.a * $scope.o.b;
        }
    }, true);
}]);