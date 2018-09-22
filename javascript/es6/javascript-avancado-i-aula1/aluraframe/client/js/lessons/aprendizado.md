Problema reolvido com o commit - Implementando a serializacao com o JSONstringify

Impedir a importacao duplicada de um array de objetos para o indexedDb.

Contexto
Normalmente podemos usar em um array o metodo filter iterando com o indexof que compara o conteudo e assim prosseguir com a importação mas o problema é :

n1 = new objetox();
n2 = new objetox();
Se compararmos n1 == n2 teremos uma falsidade porque cada objetox criado por new endereça diferente na memoria e consequentemente as variaves n1 e n2 são objetos diferentes mesmo com o mesmo conteudo.
Quando comparamos objetos primitivos como string, integer o resultado será uma igualdade.

A solução passar por transformar o objeto em string com o JSONtringfy e buscar com o metodo some() presente no array. 
Exemplo : 
 negociacoes.filter(negociacao => this._listaNegociacoes.negociacoes.indexof(negociacao) == -1)
 para 
 negociacoes.filter(negociacao => 
                    !this._listaNegociacoes.negociacoes.some(negociacaoExistente =>
                        JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
