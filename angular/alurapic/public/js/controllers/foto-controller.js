angular.module('alurapic').controller('FotoController',function($scope,recursoFoto,cadastroDeFotos,$routeParams){

$scope.foto = {};
$scope.mensagem = '';

if($routeParams.fotoId){
	recursoFoto.get({fotoId : $routeParams.fotoId},function(foto){
		$scope.foto = foto;
	},function(erro){
		$scope.mensagem = 'Não foi possivel obter a foto';
	});
}

$scope.submeter = function(){
	if($scope.formulario.$valid){
/*		if($scope.foto._id){
			recursoFoto.update({fotoId : $scope.foto._id},$scope.foto,function(){
			$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
			},function(erro){
			$scope.mensagem = 'Não foi possivel alterar a foto' + $scope.foto.titulo ;
			});

			$http.put('v1/fotos',$scope.foto._id,$scope.foto)
.success(function(){
	// $scope.foto  = {};
	$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
})
.error(function(erro){
$scope.mensagem = 'Não foi possivel alterar a foto' + $scope.foto.titulo ;
});

		}else{
			$http.post('v1/fotos',$scope.foto)
.success(function(){
	$scope.foto  = [];
	$scope.mensagem = 'Foto inserida com sucesso';
})
.error(function(erro){
$scope.mensagem = 'Não foi possivel inserir a foto';
});
		}
*/

cadastroDeFotos.cadastrar($scope.foto)
.then(function(dados){
	$scope.mensagem = dados.mensagem;
	if (dados.inclusao) $scope.foto = {};
})
.catch(function(dados){
	$scope.mensagem = dados.mensagem;
})

	}
};

});
