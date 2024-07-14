const { Matricula } = require('../models');

class MatriculaServices{
  static async getMatriculas(){
    try{
      const matriculas = await Matricula.findAll();
      return matriculas;
    } catch(error){
      return error;
    }
  }

  static async createMatricula(body){
    try {
      await Matricula.create(body);
      return true;
    } catch(error){
      return false;
    }
  }
}

module.exports = MatriculaServices;