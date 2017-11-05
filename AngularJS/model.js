//ng-model is for two way data binding and this directive provides type validations for application data like email..etc
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = " ";
});

/*when we use ng-bind or {{}}(expression) it will just
show the data from the model(data) to the view(HTML)
we cannot use them for two data binding that is
(input, select, textarea). if we use ng-model the data
gets updated when we change it in the model and view*/