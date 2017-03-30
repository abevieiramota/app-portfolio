<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br" ng-app="portfolio">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>Alurapic</title>
<link rel="stylesheet" href="resources/css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/bootstrap-theme.min.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
<script type="text/javascript" src="resources/js/main.js"></script>
<script type="text/javascript" src="resources/js/controllers/fotos-controller.js"></script>
</head>
<body ng-controller="FotosController">
	<div class="container">
		<h1 class="text-center">Alurapic</h1>
		<img class="img-responsive center-block" src="{{foto.url}}"
			alt="{{foto.titulo}}">
	</div>
</body>
</html>