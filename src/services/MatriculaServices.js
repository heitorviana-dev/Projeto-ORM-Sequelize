const { Matricula } = require('../models');

class MatriculaServices{
  static async getMatriculas(){ // Get
    try{
      const matriculas = await Matricula.findAll();
      return matriculas;
    } catch(error){
      return error;
    }
  }

  static async createMatricula(body){ // Post
    try {
      await Matricula.create(body);
      return true;
    } catch(error){
      return false;
    }
  }

  static async updateMatricula(id, body){ // Update
    try {
      await Matricula.update(body, { where: {id} }, {});
      return true;
    } catch(error){
      return false;
    }
  }

  static async deleteMatricula(id){ // Delete
    try {
      await Matricula.destroy({ where: {id} });
      return true;
    } catch(error){
      return false;
    }
  }
}

module.exports = MatriculaServices;