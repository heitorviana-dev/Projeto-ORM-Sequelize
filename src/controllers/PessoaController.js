const PessoaService = require('../services/PessoaServices');

class PessoaController{
  static async getPessoas(req, res){ // Read
    try {
        const listaDePessoas = await PessoaService.getAll();
        res.status(200).json(listaDePessoas);
    } catch(error){
        // Tratamento de erro
        res.status(500).json(error);
    }
  }

  static async createPessoas(req, res){ // Create
    try {
      await PessoaService.create(req.body);
      res.status(201).json({mensagem: 'Uma nova pessoa foi criada.'});
    } catch(error){
      res.status(500).json(error);
    }
  }

  static async updatePessoa(req, res){ // Update
    try {
      const { id } = req.params;
      const pessoaAtualizada = await PessoaService.update(id, req.body);
      if(!pessoaAtualizada){
        return res.status(404).json({ mensagem: 'A pessoa não foi encontrada' });
      }
      return res.status(201).json({ mensagem: 'A pessoa foi atualizada com sucesso.' });
    } catch(error){
      res.status(500).json(error);
    }
  }

  static async deletePessoa(req, res){ // Delete
    try {
      const { id } = req.params;
      const pessoaDeletada = await PessoaService.delete(id);
      if(pessoaDeletada === 0){
        return res.status(404).json({ mensagem: 'A pessoa não foi encontrada.' });
      }
      res.status(202).json({ mensagem: 'A pessoa foi deletada.' });
    } catch(error){
      res.status(500).json(error);
    }
  }
}

module.exports = PessoaController; 