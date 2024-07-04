const { Curso } = require('../models');

class CursoServices{
  static async getCursos(){
    try {
      const listaDeCursos = await Curso.findAll();
      return listaDeCursos;
    } catch(error){
      return error;
    }
  }

  static async createCursos(body){
    try {
      await Curso.create(body);
      return true;
    } catch(error){
      return false;
    }
  }
}

module.exports = CursoServices;