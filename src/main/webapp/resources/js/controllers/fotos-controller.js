angular.module("portfolio").controller("FotosController", function($scope, $http) {

	var promise = $http.get("foto/");
	
	promise.then(function(retorno) {
		
		$scope.fotos = retorno.data;
		
	}).catch(function(error) {
		
		console.log(error);
		
	});

});