'use strict';
const User = require(`../../app/models`).User;

module.exports = {
  up: (queryInterface, Sequelize) => {

    return User.create({
      username: `admin`,
      name: `Ogabek`,
      password: 123456,
      role: `SUPER_ADMIN`
    });

    // return queryInterface.bulkInsert(`Users`, [{
    //   username: `admin`,
    //   name: `Ogabek`,
    //   password: 123456,
    //   role: `SUPER_ADMIN`
    // }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete(`Users`, null, {});
  }
};
