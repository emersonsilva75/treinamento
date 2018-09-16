class ListaNegociacoes{
    constructor(/*contexto,armadilha*/){
        this._negociacoes = [];
      //  this._armadilha = armadilha;
        //this._contexto = contexto;
    }

    adiciona(negociacao){
       /*
       Gambiarra
       this._negociacoes = [].concat(this._negociacoes,negociacao);
       */

        this._negociacoes.push(negociacao);
      
        // this._armadilha(this);
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
    esvazia(){
        this._negociacoes = [];
      //  this._armadilha(this);
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }
    
}