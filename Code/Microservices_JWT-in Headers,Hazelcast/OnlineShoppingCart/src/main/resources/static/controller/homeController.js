microservice.controller('homeController', function($scope, $route,$location) {
	
	
	$scope.cancel = function() {
		$location.path("/");
		$route.reload();
		window.location.reload();
		
	};
	
	
	$scope.logout = function() {
		$location.path("/");
		$route.reload();
		window.location.reload(); 
		
	};
});


