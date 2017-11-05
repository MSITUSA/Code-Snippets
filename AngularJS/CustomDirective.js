var app = angular.module("myApp", []);
app.directive("mani", function() {
    return {
        restrict: "C",
        template: "<h1>Printed by the directive...!!!</h1>"
    };
});