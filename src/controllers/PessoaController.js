const PessoaService = require('../services/PessoaService');

class PessoaController{
  static async getPessoas(req, res){
    try {
        const listaDePessoas = await PessoaService.getAll();
        res.status(200).json(listaDePessoas);
    } catch(error){
        // Tratamento de erro
        res.status(500).json(error);
    }
  }

  static async createPessoas(req, res){
    try {
      const pessoaCriada = await PessoaService.create(req.body);
      if(!pessoaCriada){
        return res.status(204).json({ mensagem: 'Erro na criação da pessoa.' });
      }
      return res.status(201).json({ mensagem: 'A pessoa foi criada com sucesso.' });
    } catch(error){
      res.status(500).json(error);
    }
  }

  static async updatePessoaPorId(req, res){
    try {
      const { id } = req.params;
      const listaDeAtualizados = await PessoaService.update(id, req.body);
      if(listaDeAtualizados[0] === 0){
        return res.status(204).json({ mensagem: 'Erro na atualização da pessoa.' });
      }
      return res.status(202).json({ mensagem: 'A pessoa foi atualizada com sucesso.' });
    } catch(error){
      res.status(500).json(error);
    }
  }

  static async deletePessoaPorId(req, res){
    try {
      const { id } = req.params;
      const quantDeDeletados = await PessoaService.delete(id);
      if(quantDeDeletados === 0){
        return res.status(404).json({ mensagem: 'A pessoa não foi deletada.' });
      }
      return res.status(202).json({ mensagem: 'A pessoa foi deletada com sucesso.' });
    } catch(error){
      res.status(500).json(error);
    }
  }
}

module.exports = PessoaController;