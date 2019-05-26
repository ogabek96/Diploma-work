'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(`Patients`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      },
      birthDate: {
        type: Sequelize.DATE
      },
      bloodGroup: {
        type: Sequelize.INTEGER
      },
      resusFactor: {
        type: Sequelize.INTEGER
      },
      nationality: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      branchName: {
        type: Sequelize.STRING
      },
      patientStatus: {
        type: Sequelize.INTEGER
      },
      patientType: {
        type: Sequelize.INTEGER
      },
      ambulatoryCardNumber: {
        type: Sequelize.INTEGER
      },
      patientHistoryNumber: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.INTEGER
      },
      province: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      passportSerialNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal(`now()`),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal(`now()`),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(`Patients`);
  }
};
