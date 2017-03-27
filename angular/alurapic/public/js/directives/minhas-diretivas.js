angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){


	var ddo = {};

	ddo.restric = 'AE';
	ddo.scope = {
		titulo: '@titulo'
	};
	ddo.transclude = true;



ddo.templateUrl = 'js/directives/meu-painel.html';
	return ddo;
})
.directive('minhaFoto',function(){

	var foto = {};

	foto.restric = 'AE';
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
});