var app = angular.module("app", []);
app.controller("msg", ["$scope", function($scope){
    $scope.data = [
        {v:10, r:0},
        {v:12, r:0},
        {v:14, r:0},
        {v:16, r:0}
    ];
}]);

app.directive('message', function() {
    return{
        templateUrl: 'info.html',


        compile: function(tElement, tAttribute){
            return function(scope, iElement, iAttributes, controller){
                iElement.find("#btnSum").on("click", scope.btnClick);
            }
        },
         controller: function($scope, $element, $attrs){
            $scope.btnClick = function(){
                $scope.o.r = $scope.o.v * $scope.o.v;
                $scope.$digest();
            }
        }
    }
});