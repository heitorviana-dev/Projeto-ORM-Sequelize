const MatriculaServices = require('../services/MatriculaServices');

class MatriculaController{
  static async lerMatriculas(req, res){
    try {
      const matriculas = await MatriculaServices.getMatriculas();
      if(matriculas.length === 0){
        return res.status(204).json({ mensagem: 'Não há matrículas no sistema.' });
      }
      return res.status(200).json(matriculas);
    } catch(error){
      res.status(500).json({ mensagem: 'Erro no sistema.' });
    }
  }

  static async criarMatricula(req, res){
    try {
      const novaMatricula = await MatriculaServices.createMatricula(req.body);
      if(!novaMatricula){
        return res.status(400).json({ mensagem: 'Os ids fornecidos estão incorretos, ou não existem.' });
      }
      return res.status(201).json({ mensagem: 'Matricula criada com sucesso.' });
    } catch(error){
      res.status(500).json({ mensagem: 'Erro no servidor' });
    }
  }

  static async updateMatricula(req, res){
    try {
      if(req.params.id){
        const matricula = await MatriculaServices.updateMatricula(req.params.id, req.body);
        if(!matricula){
          return res.status(400).json({ mensagem: 'Não foi possível realizar a atualização.' });
        }
        res.status(202).json({ mensagem: 'Matrícula Atualizada com sucesso.' });
      }
      return res.status(404).json({ mensagem: 'Não foi possível realizar a atualização.' });
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
  }

  static async deleteMatricula(req, res){
    try {
      if(req.params.id){
        const matricula = await MatriculaServices.deleteMatricula(req.params.id);
        if(!matricula){
          return res.status(400).json({ mensagem: 'Não foi possível deletar a matrícula. '});
        }
        return res.status(202).json({ mensagem: 'Matrícula Deletada com sucesso.' });
      }
      return res.status(404).json({ mensagem: 'Não foi possível realizar a deleção.' });
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor' });
    }
  }
}

module.exports = MatriculaController;