angular.module("portfolio", [ "minhasDiretivas", "ngAnimate", "ngRoute" ])
		.config(function($routeProvider) {

			$routeProvider.when("/fotos", {
				templateUrl : "partials/principal.html",
				controller : "FotosController"
			});

			$routeProvider.when("/fotos/new", {
				templateUrl : "partials/fotos.html"
			});

			$routeProvider.otherwise({
				redirectTo : "/fotos"
			});

		});