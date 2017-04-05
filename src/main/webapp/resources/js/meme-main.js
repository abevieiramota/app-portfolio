angular.module("meme", [ "minhasDiretivas", "ngAnimate", "ngRoute" ])
		.config(function($routeProvider) {

			$routeProvider.when("/memes", {
				templateUrl : "partials/meme-principal.html",
				controller : "MemesController"
			});

			$routeProvider.otherwise({
				redirectTo : "/memes"
			});

		});