class Negociacao {
    constructor(data,quantidade,valor){ // Dentro do constructor que se define os atributos de uma classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;   // _ é uma convenção para variaveis privadas. Apenas uma convenção
        this._valor = valor;
        Object.freeze(this);  // Congela as variaveis da classe, tornando imutavel a classe

    }

    get volume() { // getter permitira que seja chamado como um atributo e não como uma função volume()
        return this._quantidade * this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get valor(){
        return this._valor;
    }
}