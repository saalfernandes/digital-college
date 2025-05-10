'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alunos.init({
    nome: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    cpf:{
     type: DataTypes.STRING(14),
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.String(14),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  cep: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING(100),
  },
  uf: {
    type: DataTypes.STRING(200),
  },
  datadeNascimento: {
    type: DataTypes.DATE(200),
    allowNull: false
  },
  status: {
    type:DataTypes.STRING(1).ENUM('A', 'B')
  }
}, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};