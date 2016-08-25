var appMap=angular.module("Map",[]);


appMap.directive("map",function(){

    var directive = {};  
    directive.restrict = 'AE'; /* restrict this directive to elements */
    //directive.template = "<div class=\"container\" id=\"map-data\"></div>";
	require:"ngModel",
	directive.link=function($scope,$element,$attrs){
	
	    mapOptions = {
        zoom: 7,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_CENTER
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        center: new google.maps.LatLng(21.0000, 78.8718)
    };
	
              $scope.map =map = new google.maps.Map($element[0],mapOptions);
	  
	}
    
    return directive;
	
});