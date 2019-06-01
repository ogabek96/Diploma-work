'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(`firstEvaluations`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameInstitution: {
        type: Sequelize.STRING
      },
      comingDate: {
        type: Sequelize.DATE
      },
      evaluationDate: {
        type: Sequelize.DATE
      },
      firstComingDate: {
        type: Sequelize.DATE
      },
      circsDisease: {
        type: Sequelize.STRING
      },
      guidingDiagnosis: {
        type: Sequelize.STRING
      },
      firstDiagnosis: {
        type: Sequelize.STRING
      },
      fullNameDoctor: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable(`firstEvaluations`);
  }
};
