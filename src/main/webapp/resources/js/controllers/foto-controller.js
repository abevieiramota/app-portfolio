angular.module("foto")
.controller("FotoController", function($scope, $http) {
	
	$scope.foto = {};
	$scope.mensagem = '';
	
	$scope.submeter = function() {
		
		if($scope.formulario.$valid) {
		
			var promise = $http.post("/api/foto", $scope.foto);
			
			promise.then(function(retorno) {
				
				$scope.mensagem = "Foto cadastrada com sucesso";
			})
			.catch(function(error) {
				
				$scope.mensagem = "Não foi possível cadastrar a foto";
			});
		}
	};
});