var app = angular.module('app', []);
app.controller('emp',['$scope', function($scope) {
    $scope.emps = [
        {empno: "1001", ename: "x"},
        {empno: "1002", ename: "y"},
        {empno: "1003", ename: "z"},
        {empno: "1004", ename: "a"},
    ];

    $scope.addEmp = function(){
        var newEmpno = 1000 + $scope.emps.length + 1;
        var newEname = "ename"+newEmpno;

        $scope.emps.push({empno: newEmpno, ename: newEname});
    };

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test";//this will have no effect on watch collection
    };

    //following would work on everything
    $scope.$watch('emps', function(newValue, oldValue) {
        console.log("no.of employees: "+$scope.emps.length);
    }, true);
}]);