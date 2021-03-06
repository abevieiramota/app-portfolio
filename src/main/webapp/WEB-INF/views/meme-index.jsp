<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br" ng-app="meme">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>Olha os Memes!</title>
<link rel="stylesheet" href="resources/css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="resources/css/efeitos.css">
<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
<script type="text/javascript"
	src="resources/js/lib/angular-animate.min.js"></script>
<script type="text/javascript"
	src="resources/js/lib/angular-route.min.js"></script>
<script type="text/javascript" src="resources/js/meme-main.js"></script>
<script type="text/javascript"
	src="resources/js/directives/minhas-diretivas.js"></script>
<script type="text/javascript"
	src="resources/js/controllers/memes-controller.js"></script>
<script type="text/javascript"
	src="resources/js/controllers/meme-controller.js"></script>
</head>
<body ng-controller="MemesController">
	<div class="container">
		<div ng-view></div>
	</div>
</body>
</html>