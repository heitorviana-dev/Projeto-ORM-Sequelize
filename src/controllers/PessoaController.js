const PessoaService = require('../services/PessoaService');

class PessoaController{
  static async get(req, res){
    try {
        const listaDePessoas = await PessoaService.getAll();
        res.status(200).json(listaDePessoas);
    } catch(e){
        // Tratamento de erro
        res.status(500).json({error: e});
    }
  }
}

module.exports = PessoaController;