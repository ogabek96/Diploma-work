'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anamnestics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oncologydiseases: {
        type: Sequelize.INTEGER
      },
      parentsAge: {
        type: Sequelize.INTEGER
      },
      parentsLifespan: {
        type: Sequelize.INTEGER
      },
      parentsDieAge: {
        type: Sequelize.INTEGER
      },
      ovarialFunction: {
        type: Sequelize.INTEGER
      },
      menstrualFunction: {
        type: Sequelize.INTEGER
      },
      menstrualStartAge: {
        type: Sequelize.INTEGER
      },
      reproductionFunction: {
        type: Sequelize.INTEGER
      },
      kontrasepsiiMethod: {
        type: Sequelize.INTEGER
      },
      lastPregnantAge: {
        type: Sequelize.INTEGER
      },
      lastBirthAge: {
        type: Sequelize.INTEGER
      },
      organsDisease: {
        type: Sequelize.INTEGER
      },
      profession: {
        type: Sequelize.STRING
      },
      danderousProfession: {
        type: Sequelize.INTEGER
      },
      smoking: {
        type: Sequelize.INTEGER
      },
      alcohol: {
        type: Sequelize.INTEGER
      },
      diseaseLifespan: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('anamnestics');
  }
};