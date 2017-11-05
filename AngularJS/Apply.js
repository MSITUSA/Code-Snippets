var app = angular.module("app", []);
app.controller("myCtrl", ['$scope', function($scope) {
    $scope.a = 1;
    $scope.b = 2;

    //comment the below code to show the example of invoking the $apply manually
    $scope.s = 0;

    $scope.calcSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    };
}]);

//updating values externally out side of angular context
var btnClick = function(){
    var $scope = angular.element($("#div1")).scope();

    /*$scope.s = Number($scope.a) + Number($scope.b);
    $scope.$apply();*/

    $scope.$apply(function() {
        $scope.s = Number($scope.a) + Number($scope.b);
    });
}