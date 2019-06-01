'use strict';
module.exports = (sequelize, DataTypes) => {
  const firstEvaluation = sequelize.define(`firstEvaluation`, {
    nameInstitution: DataTypes.STRING,
    comingDate: DataTypes.DATE,
    evaluationDate: DataTypes.DATE,
    firstComingDate: DataTypes.DATE,
    circsDisease: DataTypes.STRING,
    guidingDiagnosis: DataTypes.STRING,
    firstDiagnosis: DataTypes.STRING,
    fullNameDoctor: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {});
  firstEvaluation.associate = function (models) {
    firstEvaluation.belongsTo(models.patient);
    // associations can be defined here
  };
  return firstEvaluation;
};
