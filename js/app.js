var app=angular.module("MyApp",['ngRoute','Map']);

/*app.config(function($routeProvider) {
   
   $routeProvider.when('/home' , {templateUrl: 'template/main.html',controller:"MainController"})
   $routeProvider.when('/about' , {templateUrl: 'template/about.html',controller:"AboutController"})
   
   .otherwise({
      redirectTo: '/home'
   });

});*/

app.controller("MainController",function($scope,$rootScope){

 //$rootScope.map.setZoom(10);
 var a=0;
   $scope.getMenu=function(){
       var mapDom = document.querySelector("#map2");
       var menuDom = document.querySelector(".menu-dashbord");
        if(a==0){
            mapDom.style.width="100%";
            mapDom.style.marginLeft="0";
            //menuDom.style.width="0";
            menuDom.style.left="-20%";
            
            a=1;
        } else{
            mapDom.style.width="80%";
            mapDom.style.marginLeft="20%";
            menuDom.style.left="0";
            
            a=0;
        } 
        
       google.maps.event.trigger($rootScope.map, "resize");
       
   }
  

});



















