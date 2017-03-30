angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
	
	
	var ddo = {};
	
	ddo.restrict = 'AE';
	ddo.scope = {
		titulo: '@titulo'
	};
	ddo.transclude = true;
	
	
	
	ddo.templateUrl = 'js/directives/meu-painel.html';
	return ddo;
})
.directive('minhaFoto',function(){
	
	var foto = {};
	
	foto.restrict = 'AE';
	foto.scope = {
		titulo: '@titulo',
		url: '@url'
	};
	
	
	foto.templateUrl = 'js/directives/minha-foto.html';
	return foto;
})
.directive('meuBotaoPerigo',function(){
	var botao = {};
	botao.restrict = "E";
	botao.scope = {
		nome: '@',
		acao: '&'
	};
	botao.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
	return botao;
})
.directive('meuFocus',function(){
	var foco = {};
	foco.restrict = "A";
	/* Com o $on nesse caso não precisamos de um escopo privado
	foco.scope = {
	focado: '=' // Preciso de comportamento ambiguo
}; */

// .link é um watcher , escutador do DOM
foco.link = function(scope,element){
	scope.$on('fotoCadastrada',function(){
		element[0].focus();
	});
	/* Usando o watcher para monitorar elemento
	scope.$watch('focado',function(){
	if(scope.focado){
	element[0].focus();
	scope.focado = false;
}
}); */
}

return foco;
}).directive('meusTitulos',function(){
	var tit = {};
	tit.restrict = 'E';
	tit.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
	tit.controller = function($scope,recursoFoto){
		recursoFoto.query(function(fotos) {
			$scope.titulos = fotos.map(function(foto) {
				return foto.titulo;
			});
		});
	};
	return tit;
});