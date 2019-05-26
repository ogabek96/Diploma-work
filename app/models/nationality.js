'use strict';
module.exports = (sequelize, DataTypes) => {
  const nationality = sequelize.define(`nationality`, {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER
  }, {});
  nationality.associate = function (models) {

  };
  return nationality;
};
