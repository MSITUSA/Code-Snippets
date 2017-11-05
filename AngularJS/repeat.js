/*ng-repeat is like for loop in javascript or other programing language*/


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
$scope.names = [
    {name: "manivas", city: "milpitas"},
    {name: "ravi", city: "fremont"},
    {name: "nisar", city: "SFO"}
]
});