'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(`diagnoses`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primaryDiagnosis: {
        type: Sequelize.STRING
      },
      primaryDiagnosisDate: {
        type: Sequelize.DATE
      },
      comingDate: {
        type: Sequelize.DATE
      },
      clinicDiagnosisMKB: {
        type: Sequelize.STRING
      },
      clinicDiagnosisTNM: {
        type: Sequelize.STRING
      },
      morfologyDiagnosisMKB: {
        type: Sequelize.STRING
      },
      morfologyNumber: {
        type: Sequelize.STRING
      },
      durationSurvey: {
        type: Sequelize.STRING
      },
      surveyDate: {
        type: Sequelize.DATE
      },
      firstDiagnosisDate: {
        type: Sequelize.DATE
      },
      discrepancy: {
        type: Sequelize.STRING
      },
      finalDiagnosisDate: {
        type: Sequelize.DATE
      },
      finalDiagnosis: {
        type: Sequelize.STRING
      },
      autopsiiDiagnosis: {
        type: Sequelize.STRING
      },
      accomanyingIllness: {
        type: Sequelize.INTEGER
      },
      allergoStatus: {
        type: Sequelize.INTEGER
      },
      diagnosisConfirmationMethod: {
        type: Sequelize.INTEGER
      },
      tumorsNumber: {
        type: Sequelize.INTEGER
      },
      tumorsVolume: {
        type: Sequelize.STRING
      },
      tumorGrowthType: {
        type: Sequelize.INTEGER
      },
      metastasesDate: {
        type: Sequelize.DATE
      },
      regionalMetastases: {
        type: Sequelize.INTEGER
      },
      determinationMetastases: {
        type: Sequelize.INTEGER
      },
      localizationMetastases: {
        type: Sequelize.INTEGER
      },
      reasonsDiagnosis: {
        type: Sequelize.INTEGER
      },
      establishmentDate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable(`diagnoses`);
  }
};
