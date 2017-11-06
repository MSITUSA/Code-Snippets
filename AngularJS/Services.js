//define a module
var mainApp = angular.module("mainApp", []);

//create a factory "MathService" which provides a method multiply to return multiplication of two numbers
mainApp.factory('MathServices', function() {
    var factory = {};

    factory.multiply = function(a,b) {
        return a * b
    }
    return factory;
});

//inject the factory "MathServices" in a service to utilize the multiply method of factory
mainApp.service('CalcServices', function(MathServices) { //create a service which defines a method square to return square of a number.
    this.square = function(a) {
        return MathServices.multiply(a,a);
    }
});

//inject the service "CalcServices" into the controller.
mainApp.controller('CalcController', function ($scope, CalcServices) {
    $scope.square = function() {
        $scope.result = CalcServices.square($scope.number);
    }
});