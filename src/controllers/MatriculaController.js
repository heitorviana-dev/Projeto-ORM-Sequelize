const MatriculaServices = require('../services/MatriculaServices');

class MatriculaController{
  static async lerMatriculas(req, res){
    try {
      const matriculas = await MatriculaServices.getMatriculas();
      if(matriculas.length === 0){
        res.status(204).json({ mensagem: 'Não há matrículas no sistema.' });
      }
      res.status(200).json(matriculas);
    } catch(error){
      res.status(500).json({ mensagem: 'Erro no sistema.' });
    }
  }

  static async criarMatricula(req, res){
    try {
      const novaMatricula = await MatriculaServices.createMatricula(req.body);
      if(!novaMatricula){
        res.status(400).json({ mensagem: 'Os ids fornecidos estão incorretos, ou não existem.' });
      }
      res.status(201).json({ mensagem: 'Matricula criada com sucesso.' });
    } catch(error){
      res.status(500).json({ mensagem: 'Erro no servidor' });
    }
  }
}

module.exports = MatriculaController;