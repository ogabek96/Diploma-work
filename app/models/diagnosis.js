'use strict';
module.exports = (sequelize, DataTypes) => {
  const diagnosis = sequelize.define('diagnosis', {
    primaryDiagnosis: DataTypes.STRING,
    primaryDiagnosisDate: DataTypes.DATE,
    comingDate: DataTypes.DATE,
    clinicDiagnosisMKB: DataTypes.STRING,
    clinicDiagnosisTNM: DataTypes.STRING,
    morfologyDiagnosisMKB: DataTypes.STRING,
    morfologyNumber: DataTypes.STRING,
    durationSurvey: DataTypes.STRING,
    surveyDate: DataTypes.DATE,
    firstDiagnosisDate: DataTypes.DATE,
    discrepancy: DataTypes.STRING,
    finalDiagnosisDate: DataTypes.DATE,
    finalDiagnosis: DataTypes.STRING,
    autopsiiDiagnosis: DataTypes.STRING,
    accomanyingIllness: DataTypes.INTEGER,
    allergoStatus: DataTypes.INTEGER,
    diagnosisConfirmationMethod: DataTypes.INTEGER,
    tumorsNumber: DataTypes.INTEGER,
    tumorsVolume: DataTypes.STRING,
    tumorGrowthType: DataTypes.INTEGER,
    metastasesDate: DataTypes.DATE,
    regionalMetastases: DataTypes.INTEGER,
    determinationMetastases: DataTypes.INTEGER,
    localizationMetastases: DataTypes.INTEGER,
    reasonsDiagnosis: DataTypes.INTEGER,
    establishmentDate: DataTypes.DATE,
    patientId: DataTypes.INTEGER
  }, {});
  diagnosis.associate = function(models) {
    // associations can be defined here
    diagnosis.belongsTo(models.patient);
  };
  return diagnosis;
};