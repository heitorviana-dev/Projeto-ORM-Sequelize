const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoa.init({ // Aqui eu inicializo como a minha tabela está estruturada
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize, // sequelize representa a conexão com a base de dados
    modelName: 'Pessoa',
    tableName: 'pessoas',
  });
  return Pessoa;
};