const { Pessoa } = require('../models');

class PessoaService{
    static async getAll(){
        try{
            const listaDePessoas = await Pessoa.findAll();
            return listaDePessoas;
        }catch(error){
            return error;
        }
    }
}

module.exports = PessoaService;