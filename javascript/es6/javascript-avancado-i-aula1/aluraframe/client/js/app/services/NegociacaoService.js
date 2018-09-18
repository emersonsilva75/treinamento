class NegociacaoService{
    constructor(){
        this._http = new HttpService();
        }
    obterNegociacaoesDaSemana(){

        return new Promise((resolve,reject)=> {
            this._http
            .get('negociacacao/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(erro =>{
                console.log(erro);
                reject('Não foi possivel obter as negociações da semana')
            });        
        });
    }
}