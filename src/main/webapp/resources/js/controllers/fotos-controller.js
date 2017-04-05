angular.module("foto")
.controller("FotosController", function($scope, resourceFoto) {
	
	$scope.fotos = [];
	$scope.filtro = "";
	$scope.mensagem = "";
	
	resourceFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(error) {
		console.log(error);
	});

	$scope.remover = function(foto) {
		
		resourceFoto.delete({fotoId: foto.id}, function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			
			$scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso.";
		}, function(error) {
			console.log(error);
			$scope.mensagem = "Não foi possível remover " + foto.titulo + ".";
		});
	};

});