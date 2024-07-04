const CursoServices = require('../services/CursoServices');

class CursoController{
  static async getCursos(req, res){
    try {
      const listaDeCursos = await CursoServices.getCursos();
      res.status(200).json(listaDeCursos);
    } catch(error){
      res.status(500).json({mensagem: 'Erro no servidor.'});
    }
  }

  static async createCursos(req, res){
    try {
      const criarCurso = await CursoServices.createCursos(req.body);
      if(!criarCurso){
        return res.status(400).json({mensagem: 'Erro na criação do curso.'});
      }
      return res.status(201).json({mensagem: 'Um novo curso foi criado.'});
    } catch(error){
      res.status(500).json({mensagem: 'Erro no servidor'});
    }
  }
}

module.exports = CursoController;