const dataSource = require('../models');

class Services { // Classe Services genérica, cuja função é servir de base para todas as entidades.
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(){ // Método para todos os models.
        return await dataSource[this.model].findAll();
    }
}

module.exports = Services;