class View{
    constructor(elemento){
        console.log(elemento);
        this._elemento = elemento;
    }

    template(model){
        throw new Error('O método template deve ser implementado');
    }

    update(model){            
        this._elemento.innerHTML = this.template(model);
    }
}