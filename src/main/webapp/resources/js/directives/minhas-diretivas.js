angular.module("minhasDiretivas", ["meusServicos"]).directive("meuPainel", function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo : "@"
	};
	// mantenha os elementos filhos
	ddo.transclude = true;

	ddo.templateUrl = "resources/js/directives/meu-painel.html";

	return ddo;
	
}).directive("minhaFoto", function() {
	
	var ddo = {};
	
	ddo.restrict = "E";
	
	ddo.scope = {
			url: "@",
			titulo: "@"
	};
	
	ddo.templateUrl = "resources/js/directives/minha-foto.html";
	
	return ddo;
	
})
.directive("meuBotaoPerigo", function() {
	
	var ddo = {};
	
	ddo.restrict = "E";
	
	ddo.scope = {
			nome: "@",
			acao: "&"
// & passa expressão
	};
	
	ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';
	
	return ddo;
	
})
.directive("meuFocus", function() {
	
	var ddo = {};
	
	ddo.restrict = "A";
	
	ddo.link = function(scope, element) {
		
		scope.$on("fotoCadastrada", function() {
			
			console.log("heeeee");
			element[0].focus();
		});
	};
	
	return ddo;
})
.directive("meusTitulos", function() {
	
	var ddo = {};
	
	ddo.restrict = "E";
	
	ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	
	ddo.controller = function($scope, resourceFoto) {
		
		resourceFoto.query(function(fotos) {
			console.log(fotos);
			$scope.titulos = fotos.map(function(foto) {
				return foto.titulo;
			});
		}) 
	};
	
	return ddo;
});