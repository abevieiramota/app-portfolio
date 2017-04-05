angular.module("foto")
.controller("FotoController", function($scope, $routeParams, resourceFoto) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	
	if($routeParams.fotoId) {
		
		resourceFoto.get({fotoId: $routeParams.fotoId}, function() {
			
			$scope.foto = response.data;
		}, function(error) {
			
			console.log(error);
			$scope.mensagem = "Não foi possível obter a foto "; 
		});
	}
	
	$scope.submeter = function() {
		
		if($scope.formulario.$valid) {
			
			if($scope.foto.id) {
				
				resourceFoto.update({fotoId: foto.id}, $scope.foto, function() {
					$scope.mensagem = "A foto " + $scope.foto.titulo + " foi alterada com sucesso.";
				}, function(error) {
					$scope.mensagem = "Não foi possível editar a foto " + $scope.foto.titulo;
				});
				
			} else {
				
				resourceFoto.post($scope.foto, function() {
					
					$scope.mensagem = "Foto cadastrada com sucesso";
				}, function(error) {
					
					$scope.mensagem = "Não foi possível cadastrar a foto";
				});
			}
		}
	};
	
});