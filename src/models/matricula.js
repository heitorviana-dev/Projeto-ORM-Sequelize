'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      // define association here

      Matricula.belongsTo(models.Pessoa, {
        foreignKey: 'estudante_id'
      });

      Matricula.belongsTo(models.Curso, {
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