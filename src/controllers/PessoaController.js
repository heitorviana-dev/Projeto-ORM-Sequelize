const { Pessoa } = require('../models');
// const { Pessoa } = database;

class PessoaController{
  static async getAll(req, res){
    try {
        const listaDePessoas = await Pessoa.findAll();
        res.status(200).json(listaDePessoas);
    } catch(e){
        // Tratamento de erro
        res.status(500).json({error: e});
    }
  }
}

export default PessoaController;