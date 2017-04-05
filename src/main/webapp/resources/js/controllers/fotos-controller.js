angular.module("foto")
.controller("FotosController", function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = "";
	$scope.mensagem = "";

	var promise = $http.get("/api/foto");
	
	promise.then(function(retorno) {
		
		$scope.fotos = retorno.data;
		
	}).catch(function(error) {
		
		console.log(error);
	});
	
	$scope.remover = function(foto) {
		
		var promise = $http.delete("/api/foto/" + foto.id);
		
		promise.then(function() {
			
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			
			$scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso."; 
		})
		.catch(function(error) {
			
			console.log(error);
			$scope.mensagem = "Não foi possível remover " + foto.titulo + ".";
		});
	};

});