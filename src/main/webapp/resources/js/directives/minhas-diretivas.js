angular.module("minhasDiretivas", []).directive("meuPainel", function() {

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
	
	ddo.restrict = "AE";
	
	ddo.scope = {
			url: "@",
			titulo: "@"
	};
	
	ddo.templateUrl = "resources/js/directives/minha-foto.html";
	
	return ddo;
});