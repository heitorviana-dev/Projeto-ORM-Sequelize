const { Pessoa } = require('../models');

class PessoaService{
    static async getAll(){
        try {
            const listaDePessoas = await Pessoa.findAll();
            return listaDePessoas;
        } catch(error){
            return error;
        }
    }

    static async create(body){
        try {
            await Pessoa.create(body);
            return true;
        } catch(e){
            return false;
        }
    }
    
    static async update(id, body){
        try {
            const pessoaAtualizada = await Pessoa.update(body, { where: {id} }); // Me retorna uma array com a quant. de linhas atualizadas
            return pessoaAtualizada;
        } catch(error){
            return error;
        }
    }

    static async delete(id){
        try {
            const quantDeDeletados = await Pessoa.destroy({ where: { id } });
            return quantDeDeletados;
        } catch(error){
            return error;
        }
    }
}

module.exports = PessoaService;