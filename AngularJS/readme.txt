Controller:
when a controller is attached to the DOM via the ng-controller directive, AngularJS will intiate a new controller object,
using the specified controllers constructor function. A new child scope will be created and made available as an
injectable parameter to the controllers constructor function as $scope.
if the controller has been attached using controller as syntax the nthe controller instance will be assigned to a property on the new scope

> we can use controllers to set up intial state of the $scope object.
> Add behaviour to the $scope object.


> we cannot use to manipulate DOM
> manage lifecycle of other components(example to create service instances)


scope:
> The scope is the binding part between the HTML(view) and the javascript(controller)
> The scope is an object with the available properties and methods

$rootScope:
> All applications have a $rootScope which is the scope created on the HTML element that contains the ng-app directive.
> The rootScope is available in the entire application.
> If  variable has the same name in both the current scope and in the rootScope, the application uses the one in the current scope.

filters:
> Filters are used to transform the data in currency, date, limitTo, lowercase orderby etc.,

services:
> services are javascript functions and responsible to do a specific tasks only.
> services are normally injected using dependency injection mechanisim of angularjs.
> there are many built in services in angularjs like $window, $https, $location and $route each and every services have specific tasks
example: $http is responsible for making Ajax calls to get the server data. $route is used to provide the routing information
> there are two ways to create the services
 >> factory
 >> service

DependencyInjection:
> Dpendency Injection is a software design pattern in which components are given their dependencies instead of hard coding them within the component.
> following are the components which can  be injected into each other as dependencies.
 >> value
 >> factory
 >> service
 >> provider
 >> constant

 value:
 > value is a simple javascript object and it is used to pass values to controller during config phase.

 service:
 > services are defined using service() functions and then injected into controllers.

 provider:
 provider is used by AngularJS internally to create services, factory etc. during config phase(phase during which AngularJS bootstraps itself).
 Below mention script can be used to create MathService that we've created earlier.
 Provider is a special factory method with a method get() which is used to return the value/service/factory.
 //define a module
 var mainApp = angular.module("mainApp", []);
 ...

 //create a service using provider which defines a method square to return square of a number.
 mainApp.config(function($provide) {
    $provide.provider('MathService', function() {
       this.$get = function() {
          var factory = {};

          factory.multiply = function(a, b) {
             return a * b;
          }
          return factory;
       };
    });
 });

 constant:
 > constants are used to pass values at config phase considering the fact that value can not be used to be passed during config phase.

 instead of then

 $watch:
 > nothing but monitoring scope varaibles and the changes of their values
> when ever we have a data binding to a scope variable then automatically a watch is created to the that variable by angular js in the memory.
those will be used by digest cycle loop.
> if the scope variable is not bound then there will be no watch.
> if the value gets changed, angular performs necessary updates(propogations to DOM, UI update etc.)
> angular can execute our custom functions (watch listeners) on value changes
> used heavily in data-binding
 >> bindings are associated with watches.
 >> Even, internally in AngularJS Framework.

Watcher counts:
> Recomended count: < 2000 watchers
> how to count:
 > Several ways to count - including writing our own scripts
 > beginners (use chrome extensions):
 >>Angular watchers
 >>batarang.
My own "watch" and listener
> we can add our own watch(manually) using "$watch" function available through "$scope" object
 >>Available at $rootScope as well
> used when AngularJS does not consider scope variables for watching
 >>Ex: scope variables not being used in data-binding
> watch listener: a function which gets executed when a "watch" detects a value change.

$scope.$watch('c', function(newValue, oldValue) {
if(newValue != oldValue) {
console.log("update c to " + newValue);
}
});

Types of Watches:
> $watch - Reference Watch
ex: $scope.$watch('c', function(newValue, oldValue) {
if(newValue != oldValue) {
console.log("update c to " +newValue);
}
});

> $watch with "true" - Equality watch
Ex: $scope.o = {
a: 1,
b: 2,
c: 3
};
$scope.$watch('o', function(newValue, oldValue) {
if(newValue != oldValue) {
$scope.o.c = $scope.o.a * $scope.o.b;
}
}, true);

> $watchGroup - Referrence watch for multiple variables
Ex: $scope.a = 1;
$scope.b = 2;
$scope.c = 3;

$scope.$watchGroup(['a', 'b'], function(newValue, oldValue) {
if(newValue != oldValue) {
$scope.c = $scope.a * $scope.b;
}
});

$watchCollection - Collection watch
> Used to watch arrays.
> detects modifications to arrays(ex: adding or deleting elements)
> does not detect modifications to array items(ex: modifying an object in an array)
  >>To achieve this use Equality watch.

Ex: $scope.emps = [
(empno: "1", ename: "Jag"),
(empno: "2", ename: "win"),
(empno: "3", ename: "chat")
];

$scope.$watchCollection('emps', function(newValue, oldValue) {
......
});

$scope.emps.push({empno: "4", ename: "test")};//modifying the array then the above function will get executed.

watch list:
> all the watches are stored in watch list by angular js whic are created in memory
> every scope will have its own watch list and even for the rootscope.

Digest Process:
> responsible to walk through entire watch list for modifications.
 >> also called as "dirty-checking"(the process of checking the current values of scope variables with their previous values)
> Exists modifications? Execute watch listeners, if any.
> keeps note of all modifications and notifies angular js framework to update DOM.
- in general, DOM gets updated after Digest Process.
> Digest Process runs as part of Angular Context
 >Angular Context: run-time env. of Angular JS Framework.
> Digest Process starts from the rootScope.
> digest process gets kicked in due to DOM events(ng-click etc.), Ajax with callbacks($http etc.), Timers with Callbacks($timeout etc.),
browser location changes, Manual invocations($apply etc.).

$apply vs $digest
> $apply, $digest
 > Used to kick in digest process manually.
 > mainly used when the scope variables are modified out of "Angular Context" and/or UI needs to refresh its data-bindings.
 > behind the scenes, $apply calls $digest.
 > Usage: $scope.$apply(), $scope.$digest().

$apply
> kicks digest process on "RootScope" (always)
 >>After evaluating RootScope, the process continues through all child scopes and nested scopes, one after another.
 > behind the scenes ng-click, $timeout, $http (ajax) etc. operations call $apply.

$digest
> kicks digest process for the current scope (and its child/nested scopes) only.
 >> Does not start from RootScope or Parent Scope.
 >> Could be called from RootScope also(equivalent to $apply)