const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      // As associações entre models são feitas aqui.
      const { Curso, Matricula } = models;
      
      Pessoa.hasMany(Curso, {
        foreignKey: 'docente_id'
      });

      Pessoa.hasMany(Matricula, {
        foreignKey: 'estudante_id'
      });
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