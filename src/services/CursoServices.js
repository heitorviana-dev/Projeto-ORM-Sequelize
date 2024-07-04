const { Curso } = require('../models');

class CursoServices{
  static async getCursos(){ // O método findAll retorna o model, então não iremos usar esse retorno
    try {
      const listaDeCursos = await Curso.findAll();
      return listaDeCursos;
    } catch(error){
      return error;
    }
  }

  static async createCursos(body){ // O método create retorna o model, então não iremos usar esse retorno
    try {
      await Curso.create(body);
      return true;
    } catch(error){
      return false;
    }
  }

  static async updateCursos(id, body){
    try {
      const listaDeAtualizados = await Curso.update(body, { where: {id} });
      return listaDeAtualizados;
    } catch(error){
      return error;
    }
  }
}

module.exports = CursoServices;