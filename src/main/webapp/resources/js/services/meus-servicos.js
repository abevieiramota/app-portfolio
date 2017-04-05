angular.module("meusServicos", ["ngResource"])
.factory("resourceFoto", function($resource) {
	
	return $resource("/api/foto/:fotoId", null, {
		update : {
			method: "PUT"
		}
	});
});