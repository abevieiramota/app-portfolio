angular.module("portfolio").controller("FotosController", function($scope, $http) {

	var promise = $http.get("https://api.imgflip.com/get_memes");
	
	promise.then(function(retorno) {
		
		$scope.fotos = retorno.data.memes;
		
		console.log(Object.keys($scope.fotos.data.data.memes));
		
	}).catch(function(error) {
		
		console.log(error);
		
	});

});