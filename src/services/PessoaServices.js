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
      const pessoa = await Pessoa.create(body);
      return pessoa;
    } catch(error){
      return error;
    }
  }

  static async update(id, body){
    try {
      const pessoaAtualizada = await Pessoa.update(body, { where: { id } });
      if(pessoaAtualizada[0] === 0){
        return false;
      }
      return true;
    } catch(error){
      return error;
    }
  }

  static async delete(id){
    try {
      const pessoaDeletada = await Pessoa.destroy({where: { id }});
      return pessoaDeletada;
    } catch(error){
      return error;
    }
  }
}

module.exports = PessoaService;