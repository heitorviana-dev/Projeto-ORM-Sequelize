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
}

module.exports = CursoServices;