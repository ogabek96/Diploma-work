'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(`Patient`, {
    fullName: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.INTEGER
    },
    birthDate: {
      type: DataTypes.DATE
    },
    bloodGroup: {
      type: DataTypes.INTEGER
    },
    resusFactor: {
      type: DataTypes.INTEGER
    },
    nationality: {
      type: DataTypes.INTEGER
    },
    patientId: {
      type: DataTypes.INTEGER
    },
    branchName: {
      type: DataTypes.STRING
    },
    patientStatus: {
      type: DataTypes.INTEGER
    },
    patientType: {
      type: DataTypes.INTEGER
    },
    ambulatoryCardNumber: {
      type: DataTypes.INTEGER
    },
    patientHistoryNumber: {
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.INTEGER
    },
    province: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    passportSerialNumber: {
      type: DataTypes.STRING
    },
  }, {});
  Patient.associate = function (models) {
    // Patient.belongsTo(models.province, { foreignKey: `id`, targetKey: `province` });
    // Patient.belongsTo(models.nationality, { foreignKey: `code`, targetKey: `nationality` });

  };
  return Patient;
};
