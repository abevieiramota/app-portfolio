angular.module("meusServicos", [ "ngResource" ])
.factory("resourceFoto",
	function($resource) {

		return $resource("/api/foto/:fotoId", null, {
			update : {
				method : "PUT"
			}
		});
	}
)
.factory("cadastroDeFoto",
	function(resourceFoto, $q, $rootScope) {

		var servico = {};
		
		var evento = "fotoCadastrada";

		servico.cadastrar = function(foto) {

			return $q(function(resolve, reject) {

				if (foto.id) {

					resourceFoto.update({ fotoId : foto.id }, foto, 
							function() {
						
								$rootScope.$broadcast(evento);

								resolve({ mensagem : "Foto " + foto.titulo	+ " atualizada com sucesso",
										  inclusao : false
								       });
					}, function(error) {

						console.log(error);
						reject({ mensagem : "Não foi possível alterar a foto " + foto.titulo });
					});
				} else {

					resourceFoto.save(foto, function() {
						
						$rootScope.$broadcast(evento);

						resolve({ mensagem : "Foto " + foto.titulo + " incluída com sucesso",
							      inclusao : true
								});
					}, function(error) {
						console.log(error);
						reject({ mensagem : "Não foi possível incluir a foto " + foto.titulo });
					});
				};
			});
		};

		return servico;
	}
);