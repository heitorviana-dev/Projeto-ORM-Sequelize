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

  static async updateCursos(req, res){
    try {
      if(req.params.id){
        const cursosAtualizados = await CursoServices.updateCursos(req.params.id, req.body);
        if(cursosAtualizados[0] === 0){
          return res.status(400).json({mensagem: 'Erro ao atualizar o curso.'});
        }
        return res.status(201).json({mensagem: 'Atualização feita com sucesso.'});
      }
      return res.status(404).json({mensagem: 'O curso a ser atualizado não existe'});
    } catch(error){
      res.status(500).json(error);
    }
  }

  static async deleteCursos(req, res){
    try {
      if(!req.params.id){
        return res.status(400).json({ mensagem: 'Id não passado.' });
      }
      const listaDeDeletados = await CursoServices.deleteCursos(req.params.id);
      if(listaDeDeletados === 0){
        return res.status(404).json({ mensagem: 'Nenhum curso encontrado com o id.' });
      }
      return res.status(200).json({ mensagem: 'Curso deletado com sucesso.' });
    } catch(error){
      res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
  }
}

module.exports = CursoController;