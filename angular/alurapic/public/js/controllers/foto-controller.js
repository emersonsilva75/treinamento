angular.module('alurapic').controller('FotoController',function($scope,$http,$routeParams){

$scope.foto = [];

if($routeParams.fotoId){
	$http.get('v1/fotos/' + $routeParams.fotoId)
	.success(function(foto){
		$scope.foto = foto;
	})
	.error(function(erro){
		$scope.mensagem = 'Não foi possivel obter a foto';
	});
}

$scope.submeter = function(){
	if($scope.formulario.$valid){
		if($scope.foto._id){
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


	}
};

});