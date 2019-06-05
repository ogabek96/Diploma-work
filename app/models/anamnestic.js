'use strict';
module.exports = (sequelize, DataTypes) => {
  const anamnestic = sequelize.define(`anamnestic`, {
    oncologydiseases: DataTypes.INTEGER,
    parentsAge: DataTypes.INTEGER,
    parentsLifespan: DataTypes.INTEGER,
    parentsDieAge: DataTypes.INTEGER,
    ovarialFunction: DataTypes.INTEGER,
    menstrualFunction: DataTypes.INTEGER,
    menstrualStartAge: DataTypes.INTEGER,
    reproductionFunction: DataTypes.INTEGER,
    kontrasepsiiMethod: DataTypes.INTEGER,
    lastPregnantAge: DataTypes.INTEGER,
    lastBirthAge: DataTypes.INTEGER,
    organsDisease: DataTypes.INTEGER,
    profession: DataTypes.STRING,
    danderousProfession: DataTypes.INTEGER,
    smoking: DataTypes.INTEGER,
    alcohol: DataTypes.INTEGER,
    diseaseLifespan: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  anamnestic.associate = function (models) {
    // associations can be defined here
    anamnestic.belongsTo(models.patient);
  };
  return anamnestic;
};
