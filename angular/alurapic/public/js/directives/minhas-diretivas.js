angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){

	/*  
	Directive Definition Object - ddo
	https://docs.angularjs.org/guide/directive
	*/

	var ddo = {};

	ddo.restric = 'AE';
	ddo.scope = {
		titulo: '@titulo'
	};
	ddo.transclude = true;

/*
	ddo.template = '<div class="panel panel-default">'
                 + '<div class="panel-heading">'
                 + '<h3 class="panel-title">{{titulo}}</h3>'
                 + '</div>'
                 + '<div class="panel-body" ng-transclude>'
                 + '</div>'
                 + '</div>'

*/

ddo.templateUrl = 'js/directives/meu-painel.html';
	return ddo;
});