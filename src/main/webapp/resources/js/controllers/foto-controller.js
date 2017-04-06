angular.module("foto")
.controller("FotoController", function($scope, $routeParams, cadastroDeFoto, resourceFoto) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	$scope.focado = false;
	
	if($routeParams.fotoId) {
		
		resourceFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
			
			$scope.foto = foto;
		}, function(error) {
			
			console.log(error);
			$scope.mensagem = "Não foi possível obter a foto "; 
		});
	}
	
	$scope.submeter = function() {
		
		if($scope.formulario.$valid) {
			
			cadastroDeFoto.cadastrar($scope.foto)
			.then(function(dados) {
				
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) {
					$scope.foto = {};
					$scope.formulario.$setPristine();
				}
			})
			.catch(function(dados) {
				$scope.mensagem = dados.mensagem;
			});
		}
	};
	
});