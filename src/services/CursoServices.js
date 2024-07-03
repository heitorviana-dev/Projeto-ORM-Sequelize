const { Curso } = require('../models');

class CursoServices{
  static async getCursos(){
    try {
      const cursos = await Curso.findAll();
      return cursos;
    } catch(e){
      return e;
    }
  }
}

module.exports = CursoServices;