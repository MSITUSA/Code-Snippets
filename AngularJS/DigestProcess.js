var app = angular.module("app", []);
app.controller("myCtrl", ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    //watch for a
    $scope.$watch('a', function(newValue, oldValue) {
        if(oldValue != newValue){
            console.log("a modified to "+newValue);
        }
    });

    //watch for b
    $scope.$watch('b', function(newValue, oldValue) {
        if(oldValue != newValue){
            console.log("b modified to "+newValue);
        }
    });

    //watch for c
    $scope.$watch('c', function(newValue, oldValue) {
        if(oldValue != newValue){
            console.log("c modified to "+newValue);
        }
        if($scope.c > 50) {
            $scope.a = 1000;
        }
    });

    //to know how many times digest process is iterating for
    $rootScope.$watch(function() {
        console.log("----digest itteration started--");
    });
}]);