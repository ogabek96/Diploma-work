'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const provinces = [
      {
        code: 1,
        name: `Андижанская`
      },
      {
        code: 2,
        name: `Бухарская`
      },
      {
        code: 3,
        name: `Джизакская`
      },
      {
        code: 4,
        name: `Кашкадарьинская`
      },
      {
        code: 5,
        name: `Навоийская`
      },
      {
        code: 6,
        name: `Наманганская`
      },
      {
        code: 7,
        name: `Самаркандская`
      },
      {
        code: 8,
        name: `Сурхандарьинская`
      },
      {
        code: 9,
        name: `Сырдарьинская`
      },
      {
        code: 10,
        name: `Ташкентская`
      },
      {
        code: 11,
        name: `Ферганская`
      },
      {
        code: 12,
        name: `Хорезмская`
      },
      {
        code: 13,
        name: `Республика Каракалпакстан`
      },
      {
        code: 14,
        name: `г. Ташкент`
      },
    ];
    return queryInterface.bulkInsert(`provinces`, provinces, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete(`provinces`, null, {});
  }
};
