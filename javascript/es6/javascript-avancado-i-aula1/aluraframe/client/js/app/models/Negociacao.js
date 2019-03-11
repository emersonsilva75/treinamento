"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
    function Negociacao(data, quantidade, valor) {
        _classCallCheck(this, Negociacao);

        // Dentro do constructor que se define os atributos de uma classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade; // _ é uma convenção para variaveis privadas. Apenas uma convenção
        this._valor = valor;
        Object.freeze(this); // Congela as variaveis da classe, tornando imutavel a classe
    }

    _createClass(Negociacao, [{
        key: "volume",
        get: function get() {
            // getter permitira que seja chamado como um atributo e não como uma função volume()
            return this._quantidade * this._valor;
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "data",
        get: function get() {
            return new Date(this._data.getTime());
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }]);

    return Negociacao;
}();
//# sourceMappingURL=Negociacao.js.map