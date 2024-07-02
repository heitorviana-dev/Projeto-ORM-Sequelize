const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      // As associações entre models são feitas aqui.
      const { Curso } = models;

      Categoria.hasMany(Curso, {
        foreignKey: 'categoria_id'
      });
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias'
  });
  return Categoria;
};