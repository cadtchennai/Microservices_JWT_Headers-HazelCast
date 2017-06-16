var microservice = angular.module('microservice', ['ngRoute', 'ngCookies']);

microservice.config(['$routeProvider', function($routeProvider) {
    
	$routeProvider

	.when('/', {

		templateUrl : 'views/home.html',
		controller : 'homeController'
	})

	
	.when('/home', {

		templateUrl : 'views/home.html',
		controller : 'homeController'
	})

	

	.when('/login', {
		templateUrl : 'views/login.html',
		controller : "loginController"

	})
	
.when('/success', {
		templateUrl : 'views/success.html',
		controller : "successController"

	})
	.when('/order', {
		templateUrl : 'views/order.html',
		controller : "orderController"

	})
	
	.when('/shipping', {
		templateUrl : 'views/shipping.html',
		controller : "shippingController"

	})
	

	

	
	
	.when('/logout', {
		templateUrl : 'views/home.html',
		controller : "homeController"

	})
	
	
	

	.otherwise({
		redirectTo : '/'

	});
	
	
	
}

]);

