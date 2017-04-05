angular.module("foto", [ "minhasDiretivas", "ngAnimate", "ngRoute" ])
		.config(function($routeProvider) {

			$routeProvider.when("/fotos", {
				templateUrl : "partials/foto-principal.html",
				controller : "FotosController"
			});

			$routeProvider.when("/fotos/new", {
				templateUrl : "partials/foto.html",
				controller: "FotoController"
			});
			
			$routeProvider.when("/fotos/edit/:fotoId", {
				templateUrl: "partials/foto.html",
				controller: "FotoController"
			});

			$routeProvider.otherwise({
				redirectTo : "/fotos"
			});

		});