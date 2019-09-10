'use strict';
const bcrypt = require(`bcrypt`);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(`User`, {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };

  User.beforeCreate((instance, _options) => {
    return bcrypt.hash(instance.password.toString(), 5)
    .then(hashedPassword => {
      instance.password = hashedPassword;
    });
  });

  return User;
};
