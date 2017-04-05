angular.module("meme").controller("MemesController", function($scope, $http) {
	
	$scope.memes = [];
	$scope.filtro = '';

	var promise = $http.get("https://api.imgflip.com/get_memes");
	
	promise.then(function(retorno) {
		
		$scope.memes = retorno.data.data.memes;
		
	}).catch(function(error) {
		
		console.log(error);
	});

});