angular.module("foto")
.controller("FotoController", function($scope, $http, $routeParams) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	
	if($routeParams.fotoId) {
		
		var promise = $http.get("/api/foto/" + $routeParams.fotoId);
		
		promise.then(function(response) {
			
			$scope.foto = response.data;
		})
		.catch(function(error) {
			
			console.log(error);
			$scope.mensagem = "Não foi possível obter a foto "; 
		});
	}
	
	$scope.submeter = function() {
		
		if($scope.formulario.$valid) {
			
			if($scope.foto.id) {
				
				var promise = $http.put("/api/foto/" + $scope.foto.id, $scope.foto);
				
				promise.then(function() {
					$scope.mensagem = "A foto " + $scope.foto.titulo + " foi alterada com sucesso.";
				})
				.catch(function(error) {
					$scope.mensagem = "Não foi possível editar a foto " + $scope.foto.titulo;
				});
				
			} else {
		
				var promise = $http.post("/api/foto", $scope.foto);
				
				promise.then(function() {
					
					$scope.mensagem = "Foto cadastrada com sucesso";
				})
				.catch(function(error) {
					
					$scope.mensagem = "Não foi possível cadastrar a foto";
				});
			}
		}
	};
	
	
	
});