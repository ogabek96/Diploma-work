'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const nationalities = [
      {
        code: 0,
        name: `Нет данных`
      },
      {
        code: 1,
        name: `Узбек`
      },      
      {
        code: 2,
        name: `Русский`
      },
      {
        code: 3,
        name: `Татарин`
      },
      {
        code: 4,
        name: `Таджик`
      },
      {
        code: 5,
        name: `Каракалпак`
      },
      {
        code: 6,
        name: `Казах`
      },
      {
        code: 7,
        name: `Еврей`
      },
      {
        code: 8,
        name: `Украинец`
      },
      {
        code: 9,
        name: `Туркмен`
      },
      {
        code: 10,
        name: `Армянин`
      },
      {
        code: 11,
        name: `Грузин`
      },
      {
        code: 12,
        name: `Азербайджанец`
      },
      {
        code: 13,
        name: `Уйгур`
      },
      {
        code: 14,
        name: `Кореец`
      },
      {
        code: 15,
        name: `Молдаванин`
      },
      {
        code: 16,
        name: `Киргиз`
      },
      {
        code: 17,
        name: `Другие`
      }
    ];
    return queryInterface.bulkInsert(`nationalities`, nationalities, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete(`nationalities`, null, {});
  }
};
