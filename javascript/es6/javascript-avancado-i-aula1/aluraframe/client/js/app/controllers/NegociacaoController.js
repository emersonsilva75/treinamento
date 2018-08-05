class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);        
        /*
         O bind(document) serve para manter o queryselector no contexto do objeto document
        let inputData = document.querySelector('#data');
        Substituindo por :
        let inputData = $('#data');
        */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesview.update(model));
       
        /*
        this._listaNegociacoes = new ListaNegociacoes(this,function(model){
            this._negociacoesview.update(model);     
        });
        */
        this._negociacoesview = new NegociacoesView($('#negociacoesview'));
        this._negociacoesview.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        let data = DateHelper.textoParaData(this._inputData.value);
        /*
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item,indice) => item - indice % 2)
               );
               Simplificando o if abaixo
                if (indice == 1){
                    return item - 1;
                }
                return item;

                */    


    
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
    
/*
Exemplos de uso de data

let data = new Date(this._inputData.value.split('-'));     
let data = new Date(this._inputData.value.replace('/-/g',','));
console.log(this.inputQuantidade.value);
console.log(this.inputValor.value);
        */


    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociacoes apagadas com sucesso !';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );  
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}