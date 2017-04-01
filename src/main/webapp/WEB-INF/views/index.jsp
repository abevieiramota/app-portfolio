<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br" ng-app="portfolio">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>Olha as fotos!</title>
<link rel="stylesheet" href="resources/css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="resources/css/efeitos.css">
<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
<script type="text/javascript" src="resources/js/lib/angular-animate.min.js"></script>
<script type="text/javascript" src="resources/js/main.js"></script>
<script type="text/javascript"
	src="resources/js/directives/minhas-diretivas.js"></script>
<script type="text/javascript"
	src="resources/js/controllers/fotos-controller.js"></script>
</head>
<body ng-controller="FotosController">
	<div class="container">
		<div class="jumbotron">
			<h1 class="text-center">Olha as fotos!</h1>
		</div>

		<div class="row">
			<div class="col-md-12">
				<form>
					<input ng-model="filtro" ng-model-options="{debounce: 500}"
						type="text" class="form-control" placeholder="filtrar" />
				</form>
			</div>
		</div>

		<div class="row">
			<meu-painel class="col-md-2 painel-animado"
				ng-repeat="foto in fotos | filter: {name: filtro}" titulo="{{foto.name}}">
			<img class="img-responsive center-block" src="{{foto.url}}"
				alt="{{foto.name}}"> </meu-painel>
		</div>

	</div>
</body>
</html>