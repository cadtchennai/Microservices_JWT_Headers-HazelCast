microservice.controller('shippingController', function($scope, $location,$route, loginService,$cookieStore,successService,$rootScope) {
	
	
	$rootScope.isLogin = true;
	$rootScope.isLogout=true;

	$scope.showShipping = function() {
		   var jwtcookie =$cookieStore.get('cookiejwtToken');
		   if (jwtcookie != null) {
			   
			   $scope.msg=jwtcookie; 
			   
		   }
		   else
			   {
			   $location.path("/logout");
				 $route.reload();
				 window.location.reload(); 
			   }
		   
		   }
	$scope.cancel = function() {
		$location.path("/");
		 $route.reload();
		 window.location.reload(); 
	};
	
	
	
	

});
