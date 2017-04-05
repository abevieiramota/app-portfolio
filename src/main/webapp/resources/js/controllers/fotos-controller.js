angular.module("foto")
.controller("FotosController", function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';

	var promise = $http.get("/api/foto");
	
	promise.then(function(retorno) {
		
		$scope.fotos = retorno.data;
		
	}).catch(function(error) {
		
		console.log(error);
	});

});