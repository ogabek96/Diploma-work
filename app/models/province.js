'use strict';
module.exports = (sequelize, DataTypes) => {
  const province = sequelize.define('province', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER
  }, {});
  province.associate = function(models) {
    // associations can be defined here
  };
  return province;
};