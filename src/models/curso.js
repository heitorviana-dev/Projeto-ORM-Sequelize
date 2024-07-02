'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      // As associações entre models são feitas aqui.
      const { Pessoa, Categoria, Matricula } = models;

      Curso.belongsTo(Pessoa, {
        foreignKey: 'docente_id'
      });

      Curso.belongsTo(Categoria, {
        foreignKey: 'categoria_id'
      });

      Curso.hasMany(Matricula, {
        foreignKey: 'curso_id'
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos'
  });
  return Curso;
};