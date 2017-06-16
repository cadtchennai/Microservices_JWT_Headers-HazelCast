microservice.controller('loginController',function($scope, $location, $route,loginService,$cookieStore,$rootScope){
	
 	$scope.error = false;
 	$rootScope.isLogin = false;
 	$rootScope.isLogout=false;

	$scope.success=function(data){
		$scope.msg=data;
		
	}
		$scope.login = function(){
		loginService.generateJwtToken($scope.username, $scope.password, function(data){
			alert("Inside controller"+data);
			
				if (data != null) {
					$cookieStore.put('cookiejwtToken',data);
					loginService.setJwttoken(data);				
					
					
				}
				loginService.authenticate($scope.username,$scope.password,function(data) {
					
					if($cookieStore.get('cookiejwtToken') !=null){
					
						$scope.isLogin = true;
						$scope.isLogout=true;
						$scope.afterlogin="loggedin";
						$location.path("/success");
						window.location.reload(); 
					
					}
					
					
				});
		});
	};

	
   
    $scope.logout = function() {
    	 $cookieStore.remove('cookiejwtToken');
         
		 $location.path("/logout");
		 window.location.reload();
	};
		
	
});

