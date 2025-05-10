'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(225),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(100),
      },
      uf: {
        type: Sequelize.STRING(200),
      },
      datadeNascimento: {
        type: Sequelize.DATE(200),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('A', 'B')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alunos');
  }
};