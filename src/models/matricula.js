'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      // As associações entre models são feitas aqui.

      const { Curso, Pessoa } = models;

      Matricula.belongsTo(Pessoa, {
        foreignKey: 'estudante_id'
      });

      Matricula.belongsTo(Curso, {
        foreignKey: 'curso_id'
      });
    }
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matriculas'
  });
  return Matricula;
};