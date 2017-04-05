angular.module("foto")
.controller("GruposController", function($scope, $http) {
	
	$scope.grupos = [];
	
	var promise = $http.get("/api/grupo");
	
	promise.then(function(response) {
		
		$scope.grupos = response.data;
	})
	.catch(function(error) {
		
		console.log(error);
	});
});