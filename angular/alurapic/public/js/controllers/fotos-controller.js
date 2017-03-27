angular.module('alurapic').controller('FotosController',function($scope,$http,$resource){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	var recursoFoto = $resource('v1/fotos/:fotoId');

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	},function(erro){
		console.log(erro);
	});

	/* Usando http
	$http.get('v1/fotos')
	.success(function(fotos){
	$scope.fotos = fotos;
})
.error(function(erro){
console.log(erro);
})
*/

$scope.remover = function(foto){

	recursoFoto.delete({fotoId: foto._id},function(){
		var indiceFoto = $scope.fotos.indexOf(foto);
		$scope.fotos.splice(indiceFoto,1);
		$scope.mensagem = 'Foto ' + foto.titulo + ' foi removido com sucesso';
	},function(erro){
		$scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
	});



	/* Usando http
	$http.delete('v1/fotos/' + foto._id)
	.success(function(){
	var indiceFoto = $scope.fotos.indexOf(foto);
	$scope.fotos.splice(indiceFoto,1);
	$scope.mensagem = 'Foto ' + foto.titulo + ' foi removido com sucesso';
})
.error(function(erro){
$scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
})
*/

};

/*
var promise = $http.get('v1/fotos');
promise.then(function(retorno){
$scope.fotos = retorno.data;
}).catch(function(error){
console.log(error);
}); */



});
