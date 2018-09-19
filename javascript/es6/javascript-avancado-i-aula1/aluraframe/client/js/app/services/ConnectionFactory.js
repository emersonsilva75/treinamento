var stores = ['negociacoes']; 
var version = 5;
var dbName = 'aluraframe';

class ConnectionFactory {
    constructor() {
        throw new Error('Não é possivel criar instâncias do ConnectionFactory');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {

            }

            openRequest.onsuccess = e => {

            }

            openRequest.onerror = e => {

            }


        });
    }
}