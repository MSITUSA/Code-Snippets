var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstname = "Manivas";
    $scope.changeName = function() {
        $scope.firstname = "Medishetty";
    };
});