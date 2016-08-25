var app=angular.module("MyApp",['ngRoute']);

app.controller("NavController",function($scope){
      
     $scope.navMenu=[{link:"#/home",text:"Home"},{link:"#/about",text:"About"}];
	 $scope.name="sdfsdfsdfsdf";
});

app.controller("MainController",function($scope,$rootScope){
   
    $scope.name="Vishal Gupta";
	$rootScope.title="hello";

});
app.controller("AboutController",function($scope,$rootScope){
     $rootScope.title="world";
     $scope.about="Developer";
     
});

app.config(function($routeProvider) {
   
   $routeProvider.when('/home' , {templateUrl: 'template/main.html',controller:"MainController"})
   $routeProvider.when('/about' , {templateUrl: 'template/about.html',controller:"AboutController"})
   
   .otherwise({
      redirectTo: '/home'
   });

});



















